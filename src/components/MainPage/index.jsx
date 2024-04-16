import { useState, useMemo, useEffect, useRef, useCallback } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../../assets/pokedex_logo.png";
import { useGetItemsQuery } from "../../store/api";

import { PokemonCard, Wrapper } from "./styles";

const WRAPPER_HEIGHT = 600;
const VISIBLE_ELEMENTS = 20;
const ELEMENT_HEIGHT = 40;
const THRESHOLD_ELEMENTS = 5;
const limit = 20;

// const visibleHeight = VISIBLE_ELEMENTS * ELEMENT_HEIGHT;

const MainPage = () => {
  const [skipIndex, setSkipIndex] = useState(0); // для слайса данных
  // const [loadedIndex, setLoadedIndex] = useState(0); //количество загруженных данных( но по факту это же fullData.length - но переписав его получаю хер)
  const [offset, setOffset] = useState(0); // для ртк
  const [fullData, setFullData] = useState([]); // собираю все данные в общий массив

  // const { data = [], isFetching } = useGetItemsQuery({
  //   limit,
  //   offset
  // }, {skip: false }); // TODO условие для пропуска запроса при первом рендере

  const { data = [], isFetching } = useGetItemsQuery(
    {
      limit,
      offset,
    },
    {
      // selectFromResult: (data) => {
      //   // Обновляем состояние allData, добавляя новые данные к уже существующим
      //   setFullData((prevData) => [...prevData, ...data]);
      // },
      // skip: false,
    }
  );
  //select from results / ку - посмотреть можно ли аккумулировать данные
  // console.log("loadedIndex-->", loadedIndex);
  const containerRef = useRef(null);
  // console.log('data--->',data);

  const loadedIndex = useMemo(() => fullData?.length, [fullData]);

  console.log("-loadedIndex", loadedIndex);
  const skipHeight = useMemo(() => skipIndex * ELEMENT_HEIGHT, [skipIndex]);
  // const notVisibleBottomHeight =  useMemo(() => loadedIndex * ELEMENT_HEIGHT - skipHeight - visibleHeight ,[loadedIndex, skipHeight]);

  useEffect(() => {
    if (data?.results?.length > 0) {
      console.warn("lанные пришли");
      setFullData((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  useEffect(() => {
    const scrollElement = containerRef.current;
    if (isFetching || !scrollElement) {
      return;
    }
    const handleScroll = (e) => {
      console.log("e,target-->", e.target.scrollTop);
      setSkipIndex(Math.floor(e.target.scrollTop / ELEMENT_HEIGHT));
      if (loadedIndex - skipIndex <= VISIBLE_ELEMENTS + THRESHOLD_ELEMENTS) {
        if (offset >= data?.count) {
          return;
        }
        setOffset(offset + limit);
      }
    };

    scrollElement.addEventListener("scroll", handleScroll);

    return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, [containerRef, skipIndex, loadedIndex, offset, isFetching, data?.count]);

  const navigate = useNavigate();
  const clickHandler = useCallback(
    (id) => {
      navigate(`/pokemon/${id}`);
    },
    [navigate]
  );

  //  const handleUpClick = () => {
  //    setSkipIndex(0);
  //   //  setTimeout(() => {
  //   //    window.scrollTo({ behavior: "smooth", top: 0 }); // Прокрутка страницы вверх
  //   //  }, 100); // Задержка в 100 миллисекунд
  //   containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" , inline:'start'});
  //  };

  return (
    <>
      <div>
        <Link to="/pokemon">
          <img alt="home" src={logo} title="home" />
        </Link>
      </div>

      <Wrapper $containerHeight={WRAPPER_HEIGHT} ref={containerRef}>
        <div style={{ width: "200px" }}>
          <div
            style={{ border: "1px solid green", height: `${skipHeight}px` }}
          ></div>

          {fullData?.slice(skipIndex, skipIndex + VISIBLE_ELEMENTS).map((i) => {
            return (
              <PokemonCard
                $itemHeight={ELEMENT_HEIGHT}
                // key={item.name}
                key={i.name}
                onClick={() => clickHandler(i.name)}
              >
                <div>{i.name}</div>
              </PokemonCard>
            );
          })}
          {isFetching && <div>Loading...</div>}
          {offset >= data?.count && <div>Покемонычи закончились</div>}
          {/* {<button onClick={() => handleUpClick()}>UP!</button>} */}
          {/* <div
          style={{
            border: "1px solid black",
            display:"none",
            height: `${notVisibleBottomHeight}px`
          }}
        ></div> */}
        </div>
      </Wrapper>
    </>
  );
};

export default MainPage;

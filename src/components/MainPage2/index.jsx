import { useCallback, useEffect, useMemo, useRef, useState } from "react";


import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/pokedex_logo.png";
import { useGetItemsQuery } from "../../store/api";


import { PokemonCard, Wrapper } from "./styles";

// высота одного элемента в пикселях
const itemHeight = 40;

// высота контейнера в пикселях
const containerHeight = 700;

// количество элементов, которые должны отображаться на экране
const limit = 20;

// порог для загрузки новой порции данных в пикселях
const threshold = 600;

export const MainPage = () => {
  // массив с данными для отображения
  const [fullData, setFullData] = useState([]);
  // const [startIndex, setStartIndex] = useState([]);
  const [scrollProcess, setScrollProcess] = useState(false);

  const [dataRange, setDataRange] = useState({ endIndex: 0, startIndex: 0 });

  // смещение для запроса новых данных
  const [offset, setOffset] = useState(0);

  // ссылка на элемент, в котором происходит скролинг
  const scrollElementRef = useRef(null);

  const navigate = useNavigate();

  const { data = null, isFetching } = useGetItemsQuery({ limit, offset}); // приходит только имя и ссылка

  useEffect(() => {
    if (data?.results?.length > 0) {
      setFullData((prev) => [...prev, ...data.results]);
      // setDataRange({ endIndex: data.results.length, startIndex: 0 });
    }
    }, [data?.results, data?.results.length]);
  // }, [data]);


  const clickHandler = useCallback(
    (id) => {
      navigate(`/pokemon/${id}`);
    },
    [navigate]
  );

  // скролинг
  useEffect(() => {
    const scrollElement = scrollElementRef.current;
    if (!scrollElement) {
      return;
    }
        //  const { clientHeight, scrollTop } = scrollElement;
        //  console.log("scrollTop", scrollTop);
        //  const startIndex = Math.ceil(scrollTop / itemHeight);
        //  const endIndex = Math.ceil(((scrollTop + containerHeight) / itemHeight) +2);
        //  console.log("startIndex--->>", startIndex);
        //  console.log("endIndex--->>", endIndex);

        //  setDataRange({ endIndex, startIndex });

    const onScroll = (e) => {
      // высота элемента
      // const rangeEnd = scrollElementRef?.current?.scrollTop + containerHeight;

      // индекс элемента, на котором находится верхняя граница экрана
      //! let startIndex = Math.ceil(
      //   scrollElementRef?.current?.scrollTop / itemHeight
      // );

      // индекс элемента, на котором находится нижняя граница экрана
      // let endIndex = Math.ceil(rangeEnd / itemHeight);

      // ограничиваем индексы, чтобы они не выходили за пределы массива
      //! startIndex = Math.max(0, startIndex);
      // endIndex = Math.min(fullData.length - 1, endIndex);

      // если достигли нижнего порога, загружаем еще порцию данных
      // console.log("e.target.scrollHeight ", e.target.scrollHeight);
      // const { clientHeight, scrollTop } = scrollElement;
      // // console.log("scrollTop", scrollTop);
      // const startIndex = Math.floor(scrollTop / itemHeight);
      // const endIndex = Math.ceil(
      //   (scrollTop + containerHeight) / itemHeight +2
      // );
      // // console.log("startIndex--->>", startIndex);
      // // console.log("endIndex--->>", endIndex);

      // setDataRange({ endIndex, startIndex });

      if (
        e.target.clientHeight + e.target.scrollTop >=
        e.target.scrollHeight - threshold
      ) {
        setScrollProcess(true)
      }
    
    };

    scrollElement.addEventListener("scroll", onScroll);

    return () => {
      scrollElement.removeEventListener("scroll", onScroll);
    };
  }, [scrollElementRef]);

  // юз эфект для добалвения данных
  useEffect(()=> {
    if(scrollProcess){
      setOffset((prevOffset) => prevOffset + limit);
    }
  },[scrollProcess])

  useEffect(()=> {
    setScrollProcess(false)
  },[fullData])


  const foo = useMemo(()=> {
    const scrollElement = scrollElementRef?.current;
     if (!scrollElement) {
       return;
     }

    const { scrollTop } = scrollElement;
    // console.log("scrollTop", scrollTop);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.ceil(
      (scrollTop + containerHeight) / itemHeight +2
    );
    return setDataRange({ endIndex, startIndex });
  },[])

console.log('foo------->>>', foo);



console.log("dataRange===>>>", dataRange);
  return (
    <>
      <div>
        <Link to="/pokemon">
          <img alt="home" src={logo} title="home" />
        </Link>
      </div>
      <Wrapper $containerHeight={itemHeight * fullData?.length} ref={scrollElementRef}>
        {/* <div style={{ height: itemHeight * dataRange.startIndex }} /> */}
        {fullData
          // .slice(dataRange.startIndex, dataRange.endIndex)
          // ?.slice(startIndex, startIndex + limit) //пока без слайса - не рабоатет как надо сука
          .map((pokemon) => {
            return (
              <PokemonCard
                $itemHeight={itemHeight}
                key={pokemon.name}
                onClick={() => clickHandler(pokemon.name)}
              >
                <div>{pokemon.name}</div>
              </PokemonCard>
            );
          })}
        {/* <div
          style={{
            height:
              itemHeight * (fullData.length - dataRange.startIndex - limit),
          }}
        /> */}
        {isFetching && <div>Loading...</div>}
      </Wrapper>
    </>
  );
};

export default MainPage;

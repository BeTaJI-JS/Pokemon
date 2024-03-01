import {
  useCallback,
  useEffect,
  useLayoutEffect,
  // useMemo,
  useRef,
  useState,
} from "react";
import { useGetItemsQuery } from "../../store/api";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/pokedex_logo.png";

const itemHeight = 40;
const containerHeight = 700;
// const overscan = 3;

const threshold = 700;

export const MainPage = () => {
  // const [page, setPage] = useState(1); // Состояние для отслеживания номера страницы
  // const [fullData, setfullData] = useState([]); // любоптынй факт, если делать через useMemo  - не отрисовывается
  const [scrollTop, setScrollTop] = useState(0);
  const [, setIsScrolling] = useState(false);
  const [fullData, setFullData] = useState([]);

  // const [visibleData, setVisibleData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  console.log("fullData--->>>", fullData);

  const [limit] = useState(20); // в константу
  const [offset, setOffset] = useState(0);
  //   console.log("offset--->>>>", offset);
  // console.log("scrollTop-->", scrollTop);
  const scrollElementRef = useRef(null);

  const navigate = useNavigate();
  const { data = null, isFetching } = useGetItemsQuery({ limit, offset }); // приходит только имя и ссылка

  // const fullData = useMemo(() => data?.results, [data]);
  // const fullData = pokemons;

  useEffect(() => {
    if (data?.results?.length > 0) {
      setFullData((prev) => [...prev, ...data.results]);
    }
  }, [data?.results]);

  useLayoutEffect(() => {
    // использовать юз эфект
    const scrollElement = scrollElementRef.current;
    console.log("scrollElement===>>>", scrollElement);
    if (!scrollElement) {
      return;
    }
    const handleScroll = () => {
      // console.log('e.target',e);
      const scrollTop = scrollElement.scrollTop;
      // console.log("scrollTop--->", scrollTop);

      setScrollTop(scrollTop); //! обьединить юз эфекты нижний в верхний
    };
    handleScroll();

    scrollElement.addEventListener("scroll", handleScroll);

    return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const scrollElement = scrollElementRef.current;
    if (!scrollElement) {
      return;
    }

    //!убрать таймаут добавить линтер
    const handleScroll = () => {
      // console.log("scrollElement.clientHeight==>>>", scrollElement.clientHeight);
      // console.log("scrollElement.scrollTop==>>>", scrollElement.scrollTop);
      // console.log(
      //   "!!!!===>>>scrollElement.scrollHeight-->>>",
      //   scrollElement.scrollHeight
      // );
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        // console.warn('sssss');

        if (
          scrollElement.clientHeight + scrollElement.scrollTop >=
          scrollElement.scrollHeight - threshold
        ) {
          // alert("Скрол ниже рамки клиента - добавляю offset в запрос");
          // Достигли конца списка, увеличиваем offset
          setOffset((prevOffset) => prevOffset + limit);
        }
      }, 500); // таймаут, чтобы определить остановку скролла
    };

    let scrollTimeout;

    scrollElement.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(scrollTimeout);
      scrollElement.removeEventListener("scroll", handleScroll);
      // setFullData([])
    };
  }, [limit, offset]);

  // useEffect(() => {
  //   const scrollElement = scrollElementRef.current;
  //   if (!scrollElement) {
  //     return;
  //   }

  //   const handleScroll = () => {
  //     setIsScrolling(true);

  //     clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(() => {
  //       setIsScrolling(false);
  //     }, 150); // таймаут, чтобы определить остановку скролла
  //   };

  //   let scrollTimeout;

  //   scrollElement.addEventListener("scroll", handleScroll);

  //   return () => {
  //     clearTimeout(scrollTimeout);
  //     scrollElement.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  //TODO virtualItems - не работает корректно НО при скроллинге дает новые данные по запросу корреткно
  // const [startIndex, endIndex] = useMemo(() => {
  // const virtualItems = useMemo(() => {
  //   const rangeStart = scrollTop;
  //   const rangeEnd = scrollTop + containerHeight;

  //   let startIndex = Math.floor(rangeStart / itemHeight);
  //   let endIndex = Math.floor(rangeEnd / itemHeight);

  //   startIndex = Math.max(0, startIndex - overscan);
  //   endIndex = Math.min(fullData?.length - 1, endIndex + overscan);

  //   const virtualItems = [];
  //   for (let i = startIndex; i < endIndex; i++) {
  //     virtualItems.push({
  //       index: i,
  //       offsetTop: i * itemHeight,
  //     });
  //   }

  //   return virtualItems;
  // }, [scrollTop, fullData?.length]);

  const clickHandler = useCallback(
    (id) => {
      navigate(`/pokemon/${id}`);
    },
    [navigate]
  );

  // const itemsToRender = fullData.slice(startIndex, endIndex +1)
  // console.log("itemsToRender_______>", itemsToRender);
  const totalListHeight = fullData?.length > 0 && itemHeight * fullData?.length;

  console.log("totalListHeight--->>>", totalListHeight);
  return (
    <>
      <div>
        <Link to="/">
          <img alt="home" src={logo} title="home" />
        </Link>
      </div>
      {/* <h1>ПОКЕМОНЫ ЕПТА</h1> */}
      <div
        ref={scrollElementRef}
        style={{
          height: containerHeight,
          overflowY: "scroll",
          border: "3px solid red",
          position: "relative",
        }}
      >
        {/* <div> */}
        {fullData?.map((pokemon) => {
          // const pokemon = fullData[virtualItem.index];
          return (
            <div
              key={pokemon.name}
              style={{
                height: itemHeight,
                boxSizing: "border-box",
                border: "1px solid blue",
                backgroundColor: "white",
                color: "red",
                top: 0,
                transform: `translateY(${pokemon.offsetTop})px`,
              }}
              onClick={() => {
                clickHandler(pokemon.name);
              }}
            >
              <div>{pokemon.name}</div>
              {/* <img src={pokemon.image} alt={`${pokemon.name}`} /> */}
            </div>
          );
        })}
        {/* </div> */}
        {isFetching && <div>Loading...</div>}
      </div>
    </>
  );
};

export default MainPage;

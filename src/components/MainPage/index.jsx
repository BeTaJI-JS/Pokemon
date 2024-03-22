import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  // useMemo,
  useRef,
  useState,
} from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/pokedex_logo.png";
import { useGetItemsQuery } from "../../store/api";
import VirtualScroll from "../VirtualScroll/virtualScroll";

const itemHeight = 40;
const containerHeight = 700;
const visibleRows = 20
const limit = 20
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
  const [endIndex, setEndIndex] = useState(20);

  console.log("fullData--->>>", fullData);

  // const limit= useMemo(()=> 20,[]); // в константу
  const [offset, setOffset] = useState(0);
  //   console.log("offset--->>>>", offset);
  // console.log("scrollTop-->", scrollTop);
  const scrollElementRef = useRef(null);

  const navigate = useNavigate();
  const { data = null, isFetching } = useGetItemsQuery({ limit, offset }); // приходит только имя и ссылка


    const getTopHeight = useMemo(() => itemHeight * startIndex, [startIndex]);
    const getBottomHeight = useMemo(
      () => fullData.length - (startIndex + visibleRows),
      [startIndex, fullData]
    );

  // const fullData = useMemo(() => data?.results, [data]);
  // const fullData = pokemons;

// useEffect(() => {
//   const visibleRowCount = Math.ceil(
//     scrollElementRef.current.clientHeight / itemHeight
//   ); // Количество видимых строк
//   console.log("visibleRowCount-->>", visibleRowCount);
//   const newStartIndex = Math.max(0, Math.floor(scrollTop / itemHeight)); // Новое значение startIndex
//   const newEndIndex = Math.min(
//     newStartIndex + visibleRowCount,
//     fullData.length - 1
//   ); // Новое значение endIndex

//   setStartIndex(newStartIndex);
//   setEndIndex(newEndIndex);
// }, [scrollTop, fullData]);

  useEffect(() => {
    if (data?.results?.length > 0) {
      setFullData((prev) => [...prev, ...data.results]);
    }

    // // использовать юз эфект
    // const scrollElement = scrollElementRef.current;
    // console.log("scrollElement===>>>", scrollElement);
    // if (!scrollElement) {
    //   return;
    // }
    // const handleScroll = () => {
    //   // console.log('e.target',e);
    //   const scrollTop = scrollElement.scrollTop;
    //   // console.log("scrollTop--->", scrollTop);

    //   setScrollTop(scrollTop); //! обьединить юз эфекты нижний в верхний
    // };
    // handleScroll();

    // scrollElement.addEventListener("scroll", handleScroll);

    // return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, [data?.results]);

  // useLayoutEffect(() => {
  //   // использовать юз эфект
  //   const scrollElement = scrollElementRef.current;
  //   console.log("scrollElement===>>>", scrollElement);
  //   if (!scrollElement) {
  //     return;
  //   }
  //   const handleScroll = () => {
  //     // console.log('e.target',e);
  //     const scrollTop = scrollElement.scrollTop;
  //     // console.log("scrollTop--->", scrollTop);

  //     setScrollTop(scrollTop); //! обьединить юз эфекты нижний в верхний

    
  //   };
  //   handleScroll();

  //   scrollElement.addEventListener("scroll", handleScroll);

  //   return () => scrollElement.removeEventListener("scroll", handleScroll);
  // }, []);

useEffect(() => {
  const scrollElement = scrollElementRef.current;
  if (!scrollElement) {
    return;
  }

  const handleScroll = () => {
    const scrollTop = scrollElement.scrollTop;
    //   // console.log("scrollTop--->", scrollTop);

    setScrollTop(scrollTop); //! обьединить юз эфекты нижний в верхний
    setIsScrolling(true);
    console.log("scrollTop=======>>>>", scrollTop);
    // console.log("scrollTop=======>>>>", scrollTop);

    const visibleRowCount = Math.ceil(scrollElement.clientHeight / itemHeight); // Количество видимых строк
    console.log("visibleRowCount-->>", visibleRowCount);
    // const newStartIndex = Math.min(0, Math.floor(scrollTop / itemHeight)); // Новое значение startnIndex
    const newStartIndex = Math.floor(scrollTop / itemHeight); // Новое значение startnIndex

    // const newStartIndex = Math.max(0,scrollTop/ itemHeight ); // Новое значение startIndex

    console.log("newStartIndex===!!!!!!!!!!!!!!===>>>>", newStartIndex);
    const newEndIndex = Math.min(
      newStartIndex + visibleRowCount +1,
      fullData.length - 1
    ); // Новое значение endIndex
    console.log("newEndIndex", newEndIndex);

    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);

    if (
      scrollElement.clientHeight + scrollElement.scrollTop >=
      scrollElement.scrollHeight - threshold
    ) {
      setIsScrolling(false);
      // alert("Скрол ниже рамки клиента - добавляю offset в запрос");
      // Достигли конца списка, увеличиваем offset
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  scrollElement.addEventListener("scroll", handleScroll);

  return () => {
    scrollElement.removeEventListener("scroll", handleScroll);
  };
}, [ offset, fullData.length, scrollTop]);


 const onScroll = useCallback(
   (e) => {
     // alert('asd')
     // console.log("e.target.clientHeight--->", e.target.clientHeight);
     // console.log("e.target.scrollTop--->", e.target.scrollTop);
     console.log("e.target", e);
     if (
       e.target.clientHeight + e.target.scrollTop >=
       e.target.scrollHeight - threshold
     ) {
      setIsScrolling(false);
      setOffset((prevOffset) => prevOffset + limit);
     }
   },
   []
 );



  const clickHandler = useCallback(
    (id) => {
      navigate(`/pokemon/${id}`);
    },
    [navigate]
  );

  console.log("startIndex==>>>>", startIndex);
  console.log("endIndex==>>>>", endIndex);

  // const pokemonsToRender= useMemo(()=> fullData.slice(startIndex, endIndex),[fullData,startIndex,endIndex])
  // const pokemonsToRender = fullData.slice(startIndex, endIndex)

  // console.log("pokemonsToRender==>>>", pokemonsToRender);

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
          border: "3px solid red",
          height: containerHeight,
          overflowY: "scroll",
          position: "relative",
        }}
        onScroll={(e)=>onScroll(e)}
      >
        <div style={{ height: getTopHeight }} />
        {fullData?.map((pokemon) => {
          // console.log("pokemon", pokemon);
          // const pokemon = fullData[virtualItem.index];
          return (
            <div
              key={pokemon.name}
              style={{
                backgroundColor: "white",
                border: "1px solid blue",
                boxSizing: "border-box",
                color: "red",
                height: itemHeight,
                top: 0,
                transform: `translateY(${pokemon.offsetTop})px`,
              }}
              onClick={() => {
                clickHandler(pokemon.name);
              }}
            >
              <div>{pokemon.name}</div>
              {/* <img alt={`${pokemon.name}`} src={pokemon.url} /> */}
            </div>
          );
        })}
        <div style={{ height: getBottomHeight }} />
        {isFetching && <div>Loading...</div>}
        {/* <VirtualScroll
          containerHeight={containerHeight}
          items={pokemonsToRender}
          rowHeight={itemHeight}
          totalItems={fullData.length}
          visibleItemsLength={20}
        /> */}
      </div>
    </>
  );
};

export default MainPage;

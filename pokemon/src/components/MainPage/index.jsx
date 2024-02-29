import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useGetItemsQuery } from "../../store/api";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/pokedex_logo.png";

const itemHeight = 40;
const containerHeight = 400;
const overscan = 3;

export const MainPage = () => {
  // const [page, setPage] = useState(1); // Состояние для отслеживания номера страницы
  // const [allPokemons, setAllPokemons] = useState([]); // любоптынй факт, если делать через useMemo  - не отрисовывается
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const [limit] = useState(100)
  const [offset, setOffset] = useState(0);
  console.log("offset--->>>>", offset);
console.log("scrollTop-->", scrollTop);
  const scrollElementRef = useRef(null);

    const navigate = useNavigate();
    const { data = [], isFetching } = useGetItemsQuery({limit , offset}); // приходит только имя и ссылка

    const allPokemons = useMemo(() => data?.results, [data]);
    // const allPokemons = pokemons;

  useLayoutEffect(() => {
    const scrollElement = scrollElementRef.current;
    console.log("scrollElement===>>>", scrollElement);
    if (!scrollElement) {
      return;
    }
    const handleScroll = () => {
      // console.log('e.target',e);
      const scrollTop = scrollElement.scrollTop;
      // console.log("scrollTop--->", scrollTop);

      setScrollTop(scrollTop);
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

    const handleScroll = () => {
      console.log("scrollElement.clientHeight==>>>", scrollElement.clientHeight);
      console.log("scrollElement.scrollTop==>>>", scrollElement.scrollTop);
      console.log(
        "!!!!===>>>scrollElement.scrollHeight-->>>",
        scrollElement.scrollHeight
      );
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);

        if (
          scrollElement.clientHeight + scrollElement.scrollTop >=
          scrollElement.clientHeight
        ) {
          alert("asasf");
          // Достигли конца списка, увеличиваем offset
          setOffset((prevOffset) => prevOffset + limit);
        }
      }, 150); // таймаут, чтобы определить остановку скролла
    };

    let scrollTimeout;

    scrollElement.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(scrollTimeout);
      scrollElement.removeEventListener("scroll", handleScroll);
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

  // const [startIndex, endIndex] = useMemo(() => {
  const virtualItems = useMemo(() => {
    const rangeStart = scrollTop;
    const rangeEnd = scrollTop + containerHeight;

    let startIndex = Math.floor(rangeStart / itemHeight);
    let endIndex = Math.floor(rangeEnd / itemHeight);

    startIndex = Math.max(0, startIndex - overscan);
    endIndex = Math.min(allPokemons?.length - 1, endIndex + overscan);

    const virtualItems = [];
    for (let i = startIndex; i < endIndex; i++) {
      virtualItems.push({
        index: i,
        offsetTop: i * itemHeight,
      });
    }

    return virtualItems;
  }, [scrollTop, allPokemons?.length]);

  const clickHandler = useCallback(
    (id) => {
      navigate(`/pokemon/${id}`);
    },
    [navigate]
  );

  // const itemsToRender = allPokemons.slice(startIndex, endIndex +1)
  // console.log("itemsToRender_______>", itemsToRender);
  const totalListHeight = allPokemons?.length > 0 && itemHeight * allPokemons?.length;

  console.log("totalListHeight--->>>", totalListHeight);
  return (
    <>
      <div>
        <Link to="/">
          <img title="home" alt="home" src={logo} />
        </Link>
      </div>
      {/* <h1>ПОКЕМОНЫ ЕПТА</h1> */}
      <div
        ref={scrollElementRef}
        style={{
          height: containerHeight,
          overflow: "auto",
          border: "3px solid red",
          position: "relative",
        }}
      >
          <div style={{height: totalListHeight}}>
        { virtualItems?.map((virtualItem) => {
          const pokemon = allPokemons[virtualItem.index];
          return !isScrolling ?
              <div
              key={pokemon.name}
              style={{
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
          : <div key={pokemon.name}>Scrolling...</div>
        })}
        </div> 
        {isFetching && <div>Loading...</div>}
      </div>
    </>
  );
};

export default MainPage;

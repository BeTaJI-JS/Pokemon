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
const containerHeight = 1000;
const overscan  = 3;

export const MainPage = () => {
  // const [page, setPage] = useState(1); // Состояние для отслеживания номера страницы
  const [allPokemons, setAllPokemons] = useState([]); // любоптынй факт, если делать через useMemo  - не отрисовывается
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);


  const scrollElementRef = useRef(null);

  useLayoutEffect(() => {
    const scrollElement = scrollElementRef.current;
    if (!scrollElement) {
      return;
    }
    const handleScroll = () => {
      const scrollTop = scrollElement.scrollTop;
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

     let timeoutId = null
     const handleScroll = () => {
      setIsScrolling(true);
      if(typeof timeoutId === 'number'){
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(()=> {
      setIsScrolling(false);
      },100)
     };


     scrollElement.addEventListener("scroll", handleScroll);

     return () => {
       if (typeof timeoutId === "number") {
         clearTimeout(timeoutId);
       }
      scrollElement.removeEventListener("scroll", handleScroll)}
   }, []);

   console.log('isScrolling--->',isScrolling);
  // const [startIndex, endIndex] = useMemo(() => {
  const virtualItems = useMemo(() => {
    const rangeStart = scrollTop;
    const rangeEnd = scrollTop + containerHeight;

    let startIndex = Math.floor(rangeStart / itemHeight);
    let endIndex = Math.floor(rangeEnd / itemHeight);

    startIndex = Math.max(0, startIndex - overscan);
    endIndex = Math.min(allPokemons.length - 1, endIndex + overscan);

    const virtualItems = []
    for(let i = startIndex; i < endIndex; i ++){
virtualItems.push({
  index: i,
  offsetTop: i * itemHeight,
})
    }

    return virtualItems;
  }, [scrollTop, allPokemons.length]);

  const navigate = useNavigate();
  const { data = [], isFetching } = useGetItemsQuery({}); // приходит только имя и ссылка

  const pokemons = useMemo(() => data?.results, [data]);
  console.log("pokemons", pokemons);
  const loadPokemons = useCallback(async () => {
    for (var i = 0; i < pokemons?.length; i++) {
      await fetch(pokemons[i].url)
        .then((res) => res.json())
        .then((res) => {
          // console.log("res--->>", res);
          const pokemonInfo = {
            name: res.name,
            id: res.id,
            types: res.types,
            number: res.id,
            image: res.sprites.front_default,
            url: pokemons[i].url,
          };
          // console.log("pokemonInfo--->>>", pokemonInfo);
          setAllPokemons((prev) => [...prev, pokemonInfo]);
        });
    }
  }, [pokemons]);

  useEffect(() => {
    if (data) {
      loadPokemons();
    }
  }, [loadPokemons, data]);

  // useEffect(() => {
  //   //e.target.documentElement.scrollHeight – высота всего скролла;
  //   // e.target.documentElement.scrollTop – сколько мы уже прокрутили от верхней части;
  //   // window.innerHeight – высота видимой части страницы.

  //   const handleScroll = () => {
  //     // console.log(" window.innerHeight===>", window.innerHeight);
  //     if (
  //       window.innerHeight + window.scrollY ===
  //         document.documentElement.offsetHeight &&
  //       !isFetching
  //     ) {
  //       console.log("page", page);
  //       setPage((prevPage) => prevPage + 1); // Увеличиваем номер страницы при достижении конца страницы
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isFetching, page]);

  console.log("allPokemons-->", allPokemons);

  const clickHandler = useCallback(
    (id) => {
      navigate(`/pokemon/${id}`);
    },
    [navigate]
  );

  // const itemsToRender = allPokemons.slice(startIndex, endIndex +1)
// console.log("itemsToRender_______>", itemsToRender);
  return (
    <>
      <div>
        <Link to="/">
          <img title="home" alt="home" src={logo} />
        </Link>
      </div>
      <h1>ПОКЕМОНЫ ЕПТА</h1>
      <div
        ref={scrollElementRef}
        style={{
          height: containerHeight,
          overflow: "auto",
          border: "3px solid red",
          position:'relative',
        }}
      >
        {virtualItems?.map((virtualItem) => {
          const pokemon = allPokemons[virtualItem.index]
          return(
          <div
            key={pokemon.id}
            style={{ color: "red", top:0 , transform:`translateY(${pokemon.offsetTop})px` }}
            onClick={() => {
              clickHandler(pokemon.id);
            }}
          >
            <div>{pokemon.name}</div>
            <img src={pokemon.image} alt={`${pokemon.name}`} />
          </div>
        )})}
        {isFetching && <div>Loading...</div>}
      </div>
    </>
  );
};

export default MainPage;

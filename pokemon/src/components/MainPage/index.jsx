
import { useCallback, useEffect, useMemo, useState } from "react";
import { useGetItemQuery, useGetItemsQuery } from "../../store/api";
import { useNavigate } from "react-router-dom";
import { setPokemonInfo } from "../../store/pokedex";
import { useDispatch } from "react-redux";


export const MainPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1); // Состояние для отслеживания номера страницы
  const [url, setUrl] = useState("");

  console.log("url", url);

  const navigate = useNavigate()
  // console.log("url--->>>", url);
  const { data = [], isFetching } = useGetItemsQuery({ pageSize: 10, page });
  const { data: pokeInfo = [] } = useGetItemQuery({url});
  console.log("pokeInfo useGetItemQuery===>>>", pokeInfo);



  const [allPokemons, setAllPokemons] = useState([]); // любоптынй факт, если делать через useMemo  - не отрисовывается

  // console.log("isFetching===>", isFetching);
  // console.log("data==>>>", data);
  const pokemons = useMemo(() => data?.results, [data]);
  // console.log("pokemons", pokemons);

  const LoadPokemons = useCallback(async () => {
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
      LoadPokemons();
    }
  }, [LoadPokemons, data]);

  useEffect(() => {
    //e.target.documentElement.scrollHeight – высота всего скролла;
    // e.target.documentElement.scrollTop – сколько мы уже прокрутили от верхней части;
    // window.innerHeight – высота видимой части страницы.

    const handleScroll = () => {
      // console.log(" window.innerHeight===>", window.innerHeight);

      if (
        window.innerHeight + window.scrollY ===
          document.documentElement.offsetHeight &&
        !isFetching
      ) {
        console.log("page", page);
        setPage((prevPage) => prevPage + 1); // Увеличиваем номер страницы при достижении конца страницы
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching, page]);

  console.log("allPokemons-->", allPokemons);

  const clickHandler = useCallback(async(url)=>{
    console.log('URL CALLBACK--->>>>>',url);
    await setUrl(url);
    dispatch(setPokemonInfo(pokeInfo)); // не срабатывает - 
    navigate("/pokemonInfo");
  },[navigate, dispatch, pokeInfo])

  return (
    <>
      <h1>ПОКЕМОНЫ ЕПТА</h1>
      <div>
        {allPokemons?.map((pokemon) => (
          <div
            key={pokemon.id}
            style={{ color: "red" }}
            onClick={() => {
              clickHandler(pokemon?.url)}}
          >
            <div>{pokemon.name}</div>
            <img src={pokemon.image} alt={`${pokemon.name}`} />
          </div>
        ))}
        {isFetching && <div>Loading...</div>}
      </div>
    </>
  );
};

export default MainPage;
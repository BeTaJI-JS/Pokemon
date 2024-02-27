import { useCallback, useEffect, useMemo, useState } from "react";
import { useGetItemsQuery } from "../../store/api";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/pokedex_logo.png'


export const MainPage = () => {
  const [page, setPage] = useState(1); // Состояние для отслеживания номера страницы
  const [allPokemons, setAllPokemons] = useState([]); // любоптынй факт, если делать через useMemo  - не отрисовывается

  const navigate = useNavigate();
  const { data = [], isFetching } = useGetItemsQuery({});// приходит только имя и ссылка

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

  const clickHandler = useCallback(
    (id) => {
      navigate(`/pokemon/${id}`);
    },
    [navigate]
  );

  return (
    <>
      <div>
        <Link to="/">
          <img title="home" alt="home" src={logo} />
        </Link>
      </div>
      <h1>ПОКЕМОНЫ ЕПТА</h1>
      <div>
        {allPokemons?.map((pokemon) => (
          <div
            key={pokemon.id}
            style={{ color: "red" }}
            onClick={() => {
              clickHandler(pokemon.id);
            }}
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

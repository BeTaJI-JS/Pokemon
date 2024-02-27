import { useCallback, useEffect, useMemo, useState } from "react";

import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import { useGetItemsQuery } from "./store/api";


const MainPage = () => {
  const [page, setPage] = useState(1); // Состояние для отслеживания номера страницы
  const { data = [], isFetching } = useGetItemsQuery({ pageSize: 10, page });

  const [allPokemons, setAllPokemons] = useState([]); // любоптынй факт, если делать через useMemo  - не отрисовывается

  console.log("isFetching===>", isFetching);
  // console.log("data==>>>", data);
  const pokemons = useMemo(() => data?.results, [data]);
  console.log("pokemons", pokemons);

  const LoadPokemons = useCallback(async () => {
    for (var i = 0; i < pokemons?.length; i++) {
      await fetch(pokemons[i].url)
        .then((res) => res.json())
        .then((res) => {
          const pokemonInfo = {
            name: res.name,
            id: res.id,
            types: res.types,
            number: res.id,
            image: res.sprites.front_default,
          };
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
          document.documentElement.offsetHeight && !isFetching
      ) {
        console.log("page", page);
        setPage((prevPage) => prevPage + 1); // Увеличиваем номер страницы при достижении конца страницы
      }
      
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetching,page]);




  return (

    <>
      <h1>ПОКЕМОНЫ ЕПТА</h1>
      <div>
        {allPokemons?.map((pokemon) => (
          <div key={pokemon.name} style={{ color: "red" }}>
            <div>{pokemon.name}</div>
            <img src={pokemon.image} alt={`${pokemon.name}`} />
          </div>
        ))}
        {isFetching && <div>Loading...</div>}
      </div>
    </>
  );
};





function App() {

  return (
    <Provider store={store}>
      <h1>Vite + React</h1>
      <MainPage />
    </Provider>
  );
}

export default App;

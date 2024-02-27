import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
pokemonInfo: null,
};

const { actions: pokedexActions, reducer: pokemonsReducer } = createSlice({
  initialState,
  name: "pokemons",
  reducers: {
    setAllPokemons(state, { payload }) {
      console.log("payload", payload);
      state.pokemons = payload;
    },
    setPokemonInfo(state, {payload}) {
      alert('asd')
      console.log("payload====>>>", payload);
      state.pokemonInfo = payload;
    },
  },
});

export const { setAllPokemons, setPokemonInfo } = pokedexActions;
export default pokemonsReducer;

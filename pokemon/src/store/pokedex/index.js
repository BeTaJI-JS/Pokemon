import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
pokemonInfo: {}
};

const { actions: pokedexActions, reducer: pokedex } = createSlice({
  initialState,
  name: "pokemons",
  reducers: {
    setAllPokemons(state, { payload }) {
      console.log("payload", payload);
      state.pokemons = payload;
    },
    setPokemonInfo(state, payload){
      console.log("payload====>>>", payload);
      state.pokemonInfo = payload
    }
  },
});

export const { setAllPokemons, setPokemonInfo } = pokedexActions;
export default pokedex;

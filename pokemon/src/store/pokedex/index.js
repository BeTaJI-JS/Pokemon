import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],

};

const { actions: pokedexActions, reducer: pokedex } = createSlice({
  initialState,
  name: "pokemons",
  reducers: {
    setAllPokemons(state, { payload }) {
      console.log("payload", payload);
      state.pokemons = payload;
    },
   
  },
});

export const { setAllPokemons } = pokedexActions;
export default pokedex;

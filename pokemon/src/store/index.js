import {  combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from './pokedex'
import { pokemonsApi } from "./api/pokemons";

// const reducer = combineReducers({
//   pokemonsReducer,
//   [pokemonsApi.reducerPath]: pokemonsApi.reducer,
// });

const store = configureStore({
  reducer: {
    // pokedex,
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
  // reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
  });

export default store;

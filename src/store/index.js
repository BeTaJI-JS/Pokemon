import { configureStore } from "@reduxjs/toolkit";
import { pokemonsApi } from "./api/pokemons";

const store = configureStore({
  reducer: {
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
});

export default store;

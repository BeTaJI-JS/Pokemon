import { configureStore } from "@reduxjs/toolkit";

import { pokemonsApi } from "./api/pokemons";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
  reducer: {
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
});

export default store;

// export const baseURL = "https://pokeapi.co/api/v2";
export const baseURL = "https://pokeapi.co/api/v2/pokemon";

// import { env } from "node:process";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonsApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.BASE_URL,
    baseUrl: baseURL,
  }),
  reducerPath: "pokemonsApi",
  // tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getItems: builder.query({
      // providesTags: cacheHandler(REQUESTS_API_TAGS.RECORDS),
      query: ({ limit, offset }) => {
        console.log("{ limit, offset }--->>>>>>", { limit, offset });
        return {
          method: "get",
          // url: `${endpoint}?${stringParams}`,
          url: `${baseURL}?limit=${limit}&offset=${offset}`,
          // providesTags: ["Pokemon"],
        };
      },
    }),
    getItem: builder.query({
      query: ({ id }) => {
        return {
          method: "get",
          url: `${baseURL}/${id}`,
          // providesTags: ["Pokemon"],
        };
      },
    }),
  }),
});

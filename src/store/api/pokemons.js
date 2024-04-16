// export const baseURL = "https://pokeapi.co/api/v2";
export const baseURL = "https://pokeapi.co/api/v2/pokemon";

// import { env } from "node:process";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonsApi = createApi({
  baseQuery: fetchBaseQuery({
    // baseUrl: process.env.BASE_URL,
    baseUrl: baseURL,
  }),
  // tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getItem: builder.query({
      query: ({ id }) => {
        return {
          method: "get",
          url: `${baseURL}/${id}`,
          // providesTags: ["Pokemon"],
        };
      },
    }),
  //   getItems: builder.query({
  //     // providesTags: cacheHandler(REQUESTS_API_TAGS.RECORDS),
  //     query: ({ limit, offset }) => {
  //       console.log("{ limit, offset }--->>>>>>", { limit, offset });
  //       //urlSearchParams || params
  //       return {
  //         method: "get",
  //         // url: `${endpoint}?${stringParams}`,
  //         url: `${baseURL}?limit=${limit}&offset=${offset}`,
  //         // providesTags: ["Pokemon"],
  //       };
  //     },
  //     selectFromResult:
  //       ({ data: newData, originalArgs }) =>
  //       (oldData) => {
  //         console.log("newData-->", newData);
  //         if (!oldData) {
  //           return [newData];
  //         }
  //         console.warn("[...oldData, newData]===>", [...oldData, newData]);
  //         return [...oldData, newData];
  //       },
  //   }),
  // }),
  getItems: builder.query({
      query: ({ limit, offset }) => {
        return {
          method: "get",
          url: `${baseURL}?limit=${limit}&offset=${offset}`,
        };
      },
      //  transformResponse: (response) => ({count: response.count, results: response.results})
    //   selectFromResult: ({ data: newData, originalArgs }) => (oldData) => {
    //     console.warn('newDATA !!!!!!!-------------->>>>>>>',newData);
    //     if (!oldData) {
    //       return [newData];
    //     }
    //     return [...oldData, newData];
    //   },
    }),
    
  }),
  reducerPath: "pokemonsApi",
});

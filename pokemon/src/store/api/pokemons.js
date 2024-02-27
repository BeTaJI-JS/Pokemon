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
  endpoints: (builder) => ({
    getItems: builder.query({
      // providesTags: cacheHandler(REQUESTS_API_TAGS.RECORDS),
      query: () => {
        // const params = new URLSearchParams();
        // const idsString = ids ? [ids].flat().join(",") : ids;
        // if (page) {
        //   params.append("limit", pageSize);
        //   params.append("offset", pageSize * (page - 1));
        // }
        // if (idsString) {
        //   params.append("id", idsString);
        // }
        // const stringParams = params.toString();
        // const endpoint = stringParams.length
        //   ? `${page ? "/pokemon" : ""}`
        //   : "/pokemon";
        return {
          method: "get",
          // url: `${endpoint}?${stringParams}`,
          url: baseURL,
        };
      },
    }),
    getItem: builder.query({
      query: ({ id }) => {
        return { method: "get", url: `${baseURL}/${id}` };
      },
    }),
  }),
});

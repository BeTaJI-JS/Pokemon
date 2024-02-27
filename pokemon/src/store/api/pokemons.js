

export const baseURL = "https://pokeapi.co/api/v2";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  reducerPath: "pokemonsApi",
  endpoints: (builder) => ({
    getItems: builder.query({
      // providesTags: cacheHandler(REQUESTS_API_TAGS.RECORDS),
      query: ({ ids, page, pageSize = 10 }) => {
        const params = new URLSearchParams();
        const idsString = ids ? [ids].flat().join(",") : ids;
        if (page) {
          params.append("limit", pageSize);
          params.append("offset", pageSize * (page - 1));
        }
        if (idsString) {
          params.append("id", idsString);
        }
        const stringParams = params.toString();
        const endpoint = stringParams.length
          ? `${page ? "/pokemon" : ""}`
          : "/pokemon";
        return {
          method: "get",
          url: `${endpoint}?${stringParams}`,
        };
      },
    }),
    getItem: builder.query({
      // query: ({url}) => ({method:'get', url: url && url })
      // query: ({ url }) => ({ method: "get", url }),
      query: ({ url }) =>{
        console.log('URL QUERY===>>',url);
        return { method: "get", url: url && url }},
    }),
  }),
});

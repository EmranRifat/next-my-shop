// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({ baseUrl: "api/server" }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;

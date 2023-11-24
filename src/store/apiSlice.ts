import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyApi = createApi({
  reducerPath: 'dummyJson',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products?format=json`,
    }),

    //'format=json' maybe this is extra and don't need.

    getProductByKey: builder.query({
      query: ({ searchValue, limit, skip }) =>
        `/products/search?q=${searchValue}&limit=${limit}&skip=${skip}&?format=json`,
    }),
  }),
});

// Export hooks for usage in functional components, which are

// auto-generated based on the defined endpoints

export const { useGetProductByKeyQuery, useGetProductsQuery } = dummyApi;

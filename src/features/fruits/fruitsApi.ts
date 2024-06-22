import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Fruit } from '../../components/Fruits';

const baseUrl = 'https://www.fruityvice.com/api/fruit/'; // Mock API base URL

export const fruitApi = createApi({
  reducerPath: 'fruitApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getFruitByName: builder.query<Fruit, string>({
      query: (name) => `/${name}`,
    }),
  }),
});

export const { useGetFruitByNameQuery } = fruitApi;

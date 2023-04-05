import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://642d766e66a20ec9ce9e3892.mockapi.io/api/v1',
  }),
  tagTypes: [],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
    }),
  }),
});

export const { useGetContactsQuery } = contactsApi;

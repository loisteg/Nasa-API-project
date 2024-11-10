import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../axios';
import { urls } from '../../constants';

import { requestsTypes, neoTypes } from '../../types';

const neoApi = createApi({
  reducerPath: 'neoApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getNeos: builder.query<neoTypes.ServerResponse, number>({
      query: (page) => ({
        url: `${urls.NEOS}?page=${page}`,
        method: requestsTypes.RequestType.GET,
      }),
    }),
    getNeo: builder.query<neoTypes.NearEarth, string>({
      query: (id) => ({
        url: `${urls.NEO}/${id}`,
        method: requestsTypes.RequestType.GET,
      }),
    }),
  }),
});

export const { useGetNeosQuery, useGetNeoQuery } = neoApi;
export const neoReducer = {
  reducerPath: neoApi.reducerPath,
  reducer: neoApi.reducer,
};
export const neoMiddleware = neoApi.middleware;

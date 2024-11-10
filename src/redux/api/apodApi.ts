import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../axios';
import { urls } from '../../constants';

import { requestsTypes, apodTypes } from '../../types';

const apodApi = createApi({
  reducerPath: 'apodApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getApods: builder.query<apodTypes.Apod[], void>({
      query: () => ({
        url: `${urls.APOD}`,
        method: requestsTypes.RequestType.GET,
      }),
    }),
  }),
});

export const { useGetApodsQuery } = apodApi;
export const apodReducer = {
  reducerPath: apodApi.reducerPath,
  reducer: apodApi.reducer,
};
export const apodMiddleware = apodApi.middleware;

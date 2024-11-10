import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../axios';
import { urls } from '../../constants';

import { requestsTypes, counterTypes } from '../../types';

const counterApi = createApi({
  reducerPath: 'counterApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getCounters: builder.query<
      counterTypes.ServerResponse,
      counterTypes.GetCountersParams
    >({
      query: ({ parameter, page }) => {
        if (!parameter) {
          throw new Error('Parametr is required.');
        }
        return {
          url:
            `${urls.COUNTER}` +
            `/search?q=${parameter}&page=${page}&media_type=image&page_size=20`,
          method: requestsTypes.RequestType.GET,
        };
      },
    }),
  }),
});

export const { useGetCountersQuery } = counterApi;
export const counterReducer = {
  reducerPath: counterApi.reducerPath,
  reducer: counterApi.reducer,
};
export const counterMiddleware = counterApi.middleware;

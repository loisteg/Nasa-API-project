import axios from 'axios';

import { API_KEY } from '../env';
import { urls } from '../constants';

import { AxiosError } from 'axios';
import { RequestType } from '../types/commonTypes/requestsTypes';

const axiosInstance = axios.create({
  baseURL: 'https:/',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url?.includes(urls.COUNTER)) {
      return config;
    }
    const apiQuery = config.url?.includes('?')
      ? `&api_key=${API_KEY}`
      : `?api_key=${API_KEY}`;
    config.url = config.url + apiQuery;
    return config;
  }
);

const axiosBaseQuery =
  () =>
  async ({
    url,
    method,
    data,
    params,
    headers,
  }: {
    url: string;
    method: RequestType;
    data?: any;
    params?: any;
    headers?: any;
  }) => {
    try {
      const result = await axiosInstance({
        url: url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export { axiosBaseQuery };

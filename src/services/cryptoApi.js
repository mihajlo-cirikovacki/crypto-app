import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createRequest } from '../utils/createRequest';
import config from '../config/config';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrlCryptoApi }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) =>
        createRequest(`/coins?limit=${count}`, config.cryptoApiHeaders),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) =>
        createRequest(`/coin/${coinId}`, config.cryptoApiHeaders),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(
          `/coin/${coinId}/history?timePeriod=${timePeriod}`,
          config.cryptoApiHeaders
        ),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

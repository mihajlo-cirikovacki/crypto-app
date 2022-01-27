import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createRequest } from '../utils/createRequest';
import config from '../config/config';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrlCryptoNews }),

  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
          config.cryptoNewsHeaders
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

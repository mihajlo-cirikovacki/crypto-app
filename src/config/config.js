const config = {
  baseUrlCryptoApi: process.env.REACT_APP_BASE_URL_CRYPTO_API,
  baseUrlCryptoNews: process.env.REACT_APP_BASE_URL_CRYPTO_NEWS,
  cryptoNewsHeaders: {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
  },
  cryptoApiHeaders: {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export default config;

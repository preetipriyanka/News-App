const BASE_URL = 'http://localhost:3001';

// export const BASE_URL =
//   process.env.NODE_ENV === 'production'
//     : 'http://localhost:3001';

const INITIAL_CARDS = 3;
const PAGE_SIZE = 100;
const SEARCH_INTERVAL = 7 * 24 * 3600 * 1000;

const API_KEY = '955ec7a803e045d8982c597a789f7166'; // API KEY 
const NEWS_URL = 'https://newsapi.org/v2';
const PROXY_URL = 'https://nomoreparties.co/news/v2';

export {
  BASE_URL,
  PAGE_SIZE,
  INITIAL_CARDS,
  SEARCH_INTERVAL,
  API_KEY,
  NEWS_URL,
  PROXY_URL,
};

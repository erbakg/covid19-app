import axios from 'axios';

export const API_BASE_URL = 'https://api.covid19api.com/';

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;

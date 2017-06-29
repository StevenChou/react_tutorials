import axios from 'axios';

const API_KEY = 'a0e6e4c074463000c9db2dec7b05446f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // return promise
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: 'FETCH_WEATHER',
    payload: request
  }
};
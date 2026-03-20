export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_THE_MOVIE_API,
  }
};

export const THE_MOVIE_API = process.env.REACT_APP_THE_MOVIE_KEY;

export const POSTER_URL = 'https://image.tmdb.org/t/p/w200/'

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const SUPPORTED_LANGUAGE = [
  {identifier : 'en' , name : "English"},
  {identifier : 'hi' , name : "Hindi"},
  {identifier : 'es' , name : "Spanish"},
]
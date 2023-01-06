import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '51152509db377696be1781d05c6af581';
const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/';

export const fetchTrending = async () => {
  const { data } = await axios.get(`trending/all/day?api_key=${API_KEY}`);

  return data;
};

export const fetchSearchMovies = async () => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&page=1&include_adult=false`
  );
  console.log(data);
  return data;
};

export const fetchMovieDetails = async () => {
  const { data } = await axios.get(
    `movie/{id}?api_key=${API_KEY}&language=en-US`
  );
  console.log(data);
  return data;
};

export const fetchMovieCredits = async () => {
  const { data } = await axios.get(
    `movie/{id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieReviews = async () => {
  const { data } = await axios.get(
    `movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  console.log(data);
  return data;
};

export const getPosterUrl = (path, size) => BASE_POSTER_URL + size + path;

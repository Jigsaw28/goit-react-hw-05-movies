const API_KEY = '9f234b00a323f5ab16274541e59c6da6';

const getMovieReviews = movieId =>
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  ).then(response => response.json());

export default getMovieReviews;


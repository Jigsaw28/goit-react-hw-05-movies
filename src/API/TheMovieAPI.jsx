const API_KEY = '9f234b00a323f5ab16274541e59c6da6';

const popularFilms = () => fetch (`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then(response => response.json())

export default popularFilms;
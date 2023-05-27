import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import detailsAPI from 'API/DetailsAPI';

export const MovieDetails = () => {
  const [film, setFilm] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    detailsAPI(movieId)
      .then(data => {
        setFilm(data);
        console.log(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <Link to={'/'}>Go Back</Link>
      <img
        src={
          film.poster_path &&
          `https://image.tmdb.org/t/p/w500/${film.poster_path}`
        }
        alt={film.title}
      />
      <h2>{film.title}</h2>
      <p>User score: {Math.round((film.vote_average * 100) / 10)}%</p>
      <h3>Overview</h3>
      <p>{film.overview}</p>
      <h3>Genres</h3>
      <ul>
        {film.genres &&
          film.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
    </>
  );
};

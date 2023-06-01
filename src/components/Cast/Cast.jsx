import { useEffect, useState } from 'react';
import getMovieCredits from 'API/getMovieCredits';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [actors, setActors] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => {
        setActors(data.cast.slice(0, 10));
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <ul>
        {actors &&
          actors.map(
            actor =>
              actor.profile_path && (
                <li key={actor.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    alt={actor.name}
                    width="150px"
                  />
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </li>
              )
          )}
      </ul>
    </>
  );
};

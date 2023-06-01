import { useEffect, useState } from 'react';
import getMovieReviews from 'API/getMovieReviews';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        setMovieReview(data.results);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {movieReview ? (
        <ul>
          {movieReview.map(el => (
            <li key={el.id}>
                  <h3>Author: {el.author}</h3>
                  <p>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

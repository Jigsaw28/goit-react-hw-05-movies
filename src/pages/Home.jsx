import popularFilms from 'API/TheMovieAPI';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer } from './Home.styled';

const Home = () => {
  const [films, setfilms] = useState(null);

  useEffect(() => {
    popularFilms()
      .then(data => setfilms(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <HomeContainer>
      <h1>Trending today</h1>
      <ul>
        {films &&
          films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title}</Link>
            </li>
          ))}
      </ul>
    </HomeContainer>
  );
};

export default Home;

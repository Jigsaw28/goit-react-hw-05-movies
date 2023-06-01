import getSearchMovie from 'API/getSearchMovie';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Wrapper, ListItem, Input, Button } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParam, setSearchParam] = useSearchParams();
  const query = searchParam.get('query') ?? '';

  const [search, setSearch] = useState(query);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search) {
      getSearchMovie(search)
        .then(data => {
          setMovies(data.results);
        })
        .catch(error => console.log(error));
    }
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.input.value.trim();
    if (!inputValue) {
      return setSearchParam({});
    }
    setSearch(inputValue);
    setSearchParam({ query: inputValue });
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="input"
        />
        <Button type="submit">Search</Button>
      </form>
      <ul>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </ListItem>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Movies;

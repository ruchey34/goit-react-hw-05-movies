import FilmList from 'components/FilmList';
import SearchForm from 'components/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movieFinder } from 'service/api';

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    (async function getFilmsBySearch() {
      const res = await movieFinder(searchQuery);
      setSearchMovie(res.data.results);
    })();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearchParams({ query: value });
    e.target.reset();
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {searchMovie.length > 0 ? (
        <FilmList options={searchMovie} query={searchQuery} />
      ) : null}
    </>
  );
};

export default MoviesPage;
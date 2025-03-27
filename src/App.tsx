import { useEffect, useState } from 'react';
import Movie from './models/movie';
import NavBar from './components/nav/nav-bar';
import Main from './components/main';
import Search from './components/nav/search';
import NamResults from './components/nav/num-results';
import Logo from './components/nav/logo';

import MovieList from './components/movie/movies/movie-list';
import Box from './components/movie/movies/box';
import WatchedSummary from './components/movie/watched/watched-summary';
import WatchedList from './components/movie/watched/watched-list';
import StarRating from './components/movie/star-rating';
import searchMovie from './features/movies';
import Loader from './components/loader';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [watched, setWatched] = useState<Movie[]>([]);

  useEffect(() => {
    searchMovie('interstellar')
      .then((val) => {
        setMovies(val);
        console.log(val.length);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NamResults numResults={movies.length} />
      </NavBar>

      <Main>
        <Box>{loading ? <Loader /> : <MovieList movies={movies} />}</Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
        {/* <StarRating /> */}
      </Main>
    </>
  );
}

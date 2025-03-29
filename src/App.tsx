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
import SelectedMovie from './components/movie/selected-movie';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [watched, setWatched] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (query.length < 3) {
      return;
    }
    searchMovie(query)
      .then((val) => {
        setMovies(val);
      })
      .catch((e) => alert(e))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NamResults numResults={movies.length} />
      </NavBar>

      <Main>
        <Box>
          {loading ? (
            <Loader />
          ) : (
            <MovieList
              movies={movies}
              onSelectMovie={(id) => setSelectedId(id)}
            />
          )}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie selectedId={selectedId} />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          )}
        </Box>
        {/* <StarRating /> */}
      </Main>
    </>
  );
}

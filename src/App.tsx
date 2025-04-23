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

import Loader from './components/loader';
import SelectedMovie from './components/movie/selected-movie';
import { useMovies } from './hooks/use-movies';
import { useLocalStorage } from './hooks/use-local-storage';

export default function App() {
  const [watched, setWatched] = useState<Movie[]>(() => {
    return JSON.parse(localStorage.getItem('watched') || '[]');
  });
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { movies, loading } = useMovies({ query });

  function addWatchedMovie(movie: Movie) {
    setWatched((watched) => {
      var newMovies: Movie[] = [...watched, movie];

      return newMovies;
    });
    setSelectedId(null);
  }

  function removeMovie(id: string) {
    setWatched((watched) => {
      var newMovies: Movie[] = watched.filter((mov) => mov.imdbID !== id);

      return newMovies;
    });
  }

  useLocalStorage({ movies: watched });
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
              onSelectMovie={(id) =>
                setSelectedId(selectedId === id ? null : id)
              }
            />
          )}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              onClose={() => setSelectedId(null)}
              onAddWatched={addWatchedMovie}
              onRemove={removeMovie}
              isWatched={watched.some((movie) => movie.imdbID === selectedId)}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} deleteWatched={removeMovie} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

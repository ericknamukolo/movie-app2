import { useState, useEffect } from 'react';
import searchMovie from '../features/movies';
import Movie from '../models/movie';

export function useMovies({ query }: { query: string }) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  return { movies, loading };
}

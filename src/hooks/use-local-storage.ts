import { useEffect } from 'react';
import Movie from '../models/movie';

export function useLocalStorage({ movies }: { movies: Movie[] }) {
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(movies));
  }, [movies]);
}

import { useState } from 'react';
import Movie from '../../models/movie';
import MovieList from './movie-list';

export default function ListBox({ movies }: { movies: Movie[] }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className='box'>
      <button
        className='btn-toggle'
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && <MovieList movies={movies} />}
    </div>
  );
}

import Movie from '../../../models/movie';
import MovieCard from './movie-card';

export default function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

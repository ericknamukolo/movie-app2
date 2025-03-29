import Movie from '../../../models/movie';
import MovieCard from './movie-card';

export default function MovieList({
  movies,
  onSelectMovie,
}: {
  movies: Movie[];
  onSelectMovie: (id: string) => void;
}) {
  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}

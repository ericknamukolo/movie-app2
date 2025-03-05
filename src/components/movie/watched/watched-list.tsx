import Movie from '../../../models/movie';
import WatchedMovieCard from './watched-movie-card';

export default function WatchedList({ watched }: { watched: Movie[] }) {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovieCard movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

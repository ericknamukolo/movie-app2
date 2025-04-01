import Movie from '../../../models/movie';
import WatchedMovieCard from './watched-movie-card';

export default function WatchedList({
  watched,
  deleteWatched,
}: {
  watched: Movie[];
  deleteWatched: (id: string) => void;
}) {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovieCard
          movie={movie}
          key={movie.imdbID}
          deleteWatched={deleteWatched}
        />
      ))}
    </ul>
  );
}

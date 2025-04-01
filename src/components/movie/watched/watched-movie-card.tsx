import Movie from '../../../models/movie';

export default function WatchedMovieCard({
  movie,
  deleteWatched,
}: {
  movie: Movie;
  deleteWatched: (id: string) => void;
}) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.Runtime}</span>
        </p>
        <button
          className='btn-delete'
          onClick={() => deleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}

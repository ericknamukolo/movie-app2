import Movie from '../../../models/movie';

const average = (arr: number[]) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function WatchedSummary({ watched }: { watched: Movie[] }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating!));
  const avgUserRating = average(watched.map((movie) => movie.userRating!));
  const avgRuntime = average(
    watched.map((movie) => Number.parseInt(movie.Runtime!))
  );
  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(1)} min</span>
        </p>
      </div>
    </div>
  );
}

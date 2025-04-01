import { useState, useEffect } from 'react';
import Movie from '../../models/movie';
import Loader from '../loader';
import { getMovieDetails } from '../../features/movies';
import StarRating from './star-rating';

export default function SelectedMovie({
  selectedId,
  onClose,
  onAddWatched,
  onRemove,
  isWatched = false,
}: {
  selectedId: string;
  onClose: () => void;
  onAddWatched: (movie: Movie) => void;
  onRemove: (id: string) => void;
  isWatched?: boolean;
}) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    getMovieDetails(selectedId)
      .then((val) => {
        document.title = `Movie | ${val?.Title}`;
        setMovie(val);
      })
      .catch((e) => alert(e))
      .finally(() => setLoading(false));

    return () => {
      document.title = 'Movie App';
    };
  }, [selectedId]);

  return (
    <div className='details'>
      {loading ? (
        <Loader />
      ) : movie ? (
        <div className='details'>
          <header>
            <button className='btn-back' onClick={onClose}>
              &larr;
            </button>
            <img src={movie.Poster} alt='Poster'></img>
            <div className='details-overview'>
              <h2>
                {movie.Title} ({movie.Year})
              </h2>
              <p>
                {movie.Released} &bull; {movie.Runtime}
              </p>
              <p>{movie.Genre}</p>
              <p>
                <span>⭐</span>
                {movie.imdbRating}
              </p>
            </div>
          </header>
          <section>
            <div className='rating'>
              {!isWatched && (
                <StarRating
                  maxRating={10}
                  onSetRating={(rate) => setRating(rate)}
                />
              )}
              {isWatched ? (
                <button
                  className='btn-add'
                  onClick={() => onRemove(movie.imdbID)}
                >
                  - Remove from list
                </button>
              ) : (
                <button
                  className='btn-add'
                  onClick={() => {
                    var mov: Movie = movie;
                    mov.userRating = rating;
                    onAddWatched(mov);
                  }}
                >
                  + Add to list
                </button>
              )}
            </div>

            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Directed by {movie.Director}</p>
          </section>
        </div>
      ) : null}
    </div>
  );
}

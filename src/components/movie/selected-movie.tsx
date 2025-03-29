import { useState, useEffect } from 'react';
import Movie from '../../models/movie';
import Loader from '../loader';

export default function SelectedMovie({ selectedId }: { selectedId: string }) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!selectedId) {
      return;
    }
    fetch(`https://www.omdbapi.com/?i=${selectedId}&apikey=YOUR_API_KEY`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((e) => alert(e))
      .finally(() => setLoading(false));
  }, [selectedId]);

  return (
    <div className='details'>
      {loading ? <Loader /> : movie ? <div></div> : null}
    </div>
  );
}

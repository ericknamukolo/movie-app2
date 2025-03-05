import { useState } from 'react';
import Movie from '../models/movie';
import ListBox from './movie/watched/list-box';
import WatchedSummary from './movie/summary/watched-summary';
import WatchedList from './movie/summary/watched-list';

function Main({ watched, movies }: { watched: Movie[]; movies: Movie[] }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <main className='main'>
      <ListBox movies={movies} />
      <div className='box'>
        <button
          className='btn-toggle'
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? '–' : '+'}
        </button>
        {isOpen2 && (
          <>
            <WatchedSummary watched={watched} />

            <WatchedList watched={watched} />
          </>
        )}
      </div>
    </main>
  );
}

export default Main;

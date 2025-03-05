import { useState } from 'react';
import WatchedList from './watched-list';
import WatchedSummary from './watched-summary';
import Movie from '../../../models/movie';

export default function WatchedBox({ watched }: { watched: Movie[] }) {
  const [isOpen2, setIsOpen2] = useState(true);
  return (
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
  );
}

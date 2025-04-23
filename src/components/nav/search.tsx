import { useEffect, useRef } from 'react';

function Search({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (val: string) => void;
}) {
  const inputEl = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  }, []);
  return (
    <input
      className='search'
      type='text'
      placeholder='Search movies...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

export default Search;

import React, { useState } from 'react';
import Movie from '../models/movie';
import Search from './search';

function NavBar({ movies }: { movies: Movie[] }) {
  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <span role='img'>🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <Search />
      <p className='num-results'>
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}

export default NavBar;

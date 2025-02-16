import React, { useState } from 'react';
import Movie from '../../models/movie';
import Search from './search';
import Logo from './logo';

function NavBar({ movies }: { movies: Movie[] }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      <Search />
      <p className='num-results'>
        Found <strong>{movies.length}</strong> results
      </p>
    </nav>
  );
}

export default NavBar;

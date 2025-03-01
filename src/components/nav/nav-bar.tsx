import Movie from '../../models/movie';
import Search from './search';
import Logo from './logo';
import NamResults from './num-results';

function NavBar({ movies }: { movies: Movie[] }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      <Search />
      <NamResults numResults={movies.length} />
    </nav>
  );
}

export default NavBar;

import React, { ReactNode } from 'react';

function NavBar({ children }: { children: ReactNode }) {
  return <nav className='nav-bar'>{children}</nav>;
}

export default NavBar;

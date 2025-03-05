import { ReactNode, useState } from 'react';

function Main({ children }: { children: ReactNode }) {
  return <main className='main'>{children}</main>;
}

export default Main;

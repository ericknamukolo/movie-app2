import { ReactNode, useState } from 'react';

export default function Box({ children }: { children: ReactNode }) {
  const [isOpen1, setIsOpen] = useState(true);
  return (
    <div className='box'>
      <button className='btn-toggle' onClick={() => setIsOpen((open) => !open)}>
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && children}
    </div>
  );
}

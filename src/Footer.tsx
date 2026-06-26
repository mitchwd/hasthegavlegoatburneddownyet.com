import type { JSX } from 'react';

const Footer = (): JSX.Element => (
  <footer>
    <div className='fixed bottom-0 left-0 h-8 px-3 pb-1 text-sm font-medium opacity-50 hover:opacity-100'>
      <a
        href='https://www.instagram.com/bernstal/?hl=en'
        target='blank'
        rel='noreferrer'
      >
        Image from @bernstal
      </a>
    </div>
    <div className='fixed right-0 bottom-0 h-8 px-3 pb-1 text-sm font-medium opacity-50 hover:opacity-100'>
      <a href='https://www.mitchwd.com' target='blank' rel='author'>
        Made by @mitchwd
      </a>
    </div>
  </footer>
);

export default Footer;

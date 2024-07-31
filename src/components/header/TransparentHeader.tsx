'use client';
import { useEffect, useState } from 'react';
import Header from './Header';

const TransparentHeader = () => {
  const [theme, setTheme] = useState<'white' | 'clear'>('clear');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setTheme('white');
      } else {
        setTheme('clear');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <Header theme={theme} />;
};

export default TransparentHeader;

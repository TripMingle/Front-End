'use client';
import { useEffect, useState } from 'react';
import * as styles from '@/styles/components/header/header.css';
import Image from 'next/image';
import HeaderProfile from './HeaderProfile';

const Header = ({ bg }: { bg: Boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.fixedbar}>
      <div className={isScrolled ? styles.whiteNavbar : styles.clearNavbar}>
        <div className={isScrolled ? styles.primaryLogo : styles.whiteLogo}>
          TripMingle
        </div>
        <HeaderProfile url={''} />
        <Image
          src={isScrolled ? '/icons/b_alarm.svg' : '/icons/w_alarm.svg'}
          width={24}
          height={24}
          alt="alram"
          className={styles.icon}
        />
        <Image
          src={isScrolled ? '/icons/b_menu.svg' : '/icons/w_menu.svg'}
          width={24}
          height={24}
          alt="menu"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Header;

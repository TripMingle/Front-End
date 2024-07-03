'use client';
import { useEffect, useState } from 'react';
import * as styles from '@/styles/components/header/header.css';
import Image from 'next/image';
import HeaderProfile from './HeaderProfile';

export const Header = () => {
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

  return isScrolled ? <WhiteHeader /> : <ClearHeader />;
};

export const WhiteHeader = () => {
  return (
    <nav className={styles.fixedbar}>
      <div className={styles.whiteNavbar}>
        <div className={styles.primaryLogo}>TripMingle</div>
        <HeaderProfile url={''} />
        <Image
          src={'/icons/b_alarm.svg'}
          width={24}
          height={24}
          alt="alram"
          className={styles.icon}
        />
        <Image
          src={'/icons/b_menu.svg'}
          width={24}
          height={24}
          alt="menu"
          className={styles.icon}
        />
      </div>
    </nav>
  );
};

const ClearHeader = () => {
  return (
    <nav className={styles.fixedbar}>
      <div className={styles.clearNavbar}>
        <div className={styles.whiteLogo}>TripMingle</div>
        <HeaderProfile url={''} />
        <Image
          src={'/icons/w_alarm.svg'}
          width={24}
          height={24}
          alt="alram"
          className={styles.icon}
        />
        <Image
          src={'/icons/w_menu.svg'}
          width={24}
          height={24}
          alt="menu"
          className={styles.icon}
        />
      </div>
    </nav>
  );
};

'use client';

import { useEffect, useState } from 'react';
import * as styles from './Navbar.css';
import NavbarProfile from './NavbarProfile';

const Navbar = ({ bg }: { bg: Boolean }) => {
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
        <NavbarProfile url={''} />
        <img
          src={isScrolled ? '/icons/b_alarm.svg' : '/icons/w_alarm.svg'}
          alt="alram"
          className={styles.icon}
        />
        <img
          src={isScrolled ? '/icons/b_menu.svg' : '/icons/w_menu.svg'}
          alt="menu"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Navbar;

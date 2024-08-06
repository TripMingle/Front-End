'use client';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import * as styles from '@/styles/components/header/header.css';
import HeaderProfile from './HeaderProfile';
import HeaderDropDown from './HeaderDropDown';
import { useUserStore } from '@/store/userStore';

const Header = ({ theme = 'white' }: { theme?: 'white' | 'clear' }) => {
  const color = theme === 'white' ? 'b_' : 'w_';
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const router = useRouter();
  const pathName = usePathname();

  const dropDownClickHandler = () => {
    if (isLoggedIn) {
      setShowDropDown(!showDropDown);
    }
  };

  const moveToLogin = () => {
    window.sessionStorage.setItem('prevPage', pathName);
    router.push('/login');
  };

  const userClickHandler = () => {
    if (!isLoggedIn) moveToLogin();
  };

  return (
    <div>
      <nav className={styles.fixedbar({ theme })}>
        <div className={styles.navbar({ theme })}>
          <div className={styles.logo({ theme })}>TripMingle</div>
          <div className={styles.user} onClick={() => userClickHandler()}>
            <HeaderProfile />
            <Image
              src={`/icons/${color}alarm.svg`}
              width={24}
              height={24}
              alt="alram"
              className={styles.icon}
            />
            <Image
              src={`/icons/${color}menu.svg`}
              width={24}
              height={24}
              alt="menu"
              className={styles.icon}
              onClick={() => dropDownClickHandler()}
            />
          </div>
        </div>
      </nav>
      {isLoggedIn && showDropDown ? <HeaderDropDown /> : <></>}
    </div>
  );
};

export default Header;

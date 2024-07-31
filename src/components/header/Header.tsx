'use client';
import { useState } from 'react';
import * as styles from '@/styles/components/header/header.css';
import Image from 'next/image';
import HeaderProfile from './HeaderProfile';
import HeaderDropDown from './HeaderDropDown';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';

const Header = ({ theme = 'white' }: { theme?: 'white' | 'clear' }) => {
  const color = theme === 'white' ? 'b_' : 'w_';
  const imageUrl = useUserStore((state) => state.imageUrl);
  const nickName = useUserStore((state) => state.nickName);
  const accessToken = useUserStore((state) => state.accessToken);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!accessToken);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const router = useRouter();

  const dropDownClickHandler = () => {
    if (isLoggedIn) {
      setShowDropDown(!showDropDown);
    }
  };

  const userClickHandler = () => {
    if (!isLoggedIn) router.push('/login');
  };

  return (
    <div>
      <nav className={styles.fixedbar({ theme })}>
        <div className={styles.navbar({ theme })}>
          <div className={styles.logo({ theme })}>TripMingle</div>
          <div className={styles.user} onClick={() => userClickHandler()}>
            <HeaderProfile
              url={imageUrl}
              nickName={nickName}
              isLoggedIn={isLoggedIn}
            />
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

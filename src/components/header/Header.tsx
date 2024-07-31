'use client';
import { useEffect, useState } from 'react';
import * as styles from '@/styles/components/header/header.css';
import Image from 'next/image';
import HeaderProfile from './HeaderProfile';
import HeaderDropDown from './HeaderDropDown';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
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
      <nav className={styles.fixedbar({ theme: 'white' })}>
        <div className={styles.navbar({ theme: 'white' })}>
          <div className={styles.logo({ theme: 'white' })}>TripMingle</div>
          <div className={styles.user} onClick={() => userClickHandler()}>
            <HeaderProfile
              url={imageUrl}
              nickName={nickName}
              isLoggedIn={isLoggedIn}
            />
            <Image
              src="/icons/b_alarm.svg"
              width={24}
              height={24}
              alt="alram"
              className={styles.icon}
            />
            <Image
              src="/icons/b_menu.svg"
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

const ClearHeader = () => {
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
      <nav className={styles.fixedbar({ theme: 'clear' })}>
        <div className={styles.navbar({ theme: 'clear' })}>
          <div className={styles.logo({ theme: 'clear' })}>TripMingle</div>
          <div className={styles.user} onClick={() => userClickHandler()}>
            <HeaderProfile
              url={imageUrl}
              nickName={nickName}
              isLoggedIn={isLoggedIn}
            />
            <Image
              src="/icons/w_alarm.svg"
              width={24}
              height={24}
              alt="alram"
              className={styles.icon}
            />
            <Image
              src="/icons/w_menu.svg"
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

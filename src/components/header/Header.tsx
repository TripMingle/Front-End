'use client';
import Image from 'next/image';
import * as styles from '@/styles/components/header/header.css';
import HeaderProfile from './HeaderProfile';
import HeaderDropDown from './HeaderDropDown';
import { useUserStore } from '@/store/userStore';
import useModal from '@/hooks/useModal';
import LoginModal from '../common/LoginModal';

const Header = ({ theme = 'white' }: { theme?: 'white' | 'clear' }) => {
  const color = theme === 'white' ? 'b_' : 'w_';
  const { isOpen, openModal, closeModal } = useModal();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const dropDownClickHandler = () => {
    if (isLoggedIn) {
      if (isOpen) closeModal();
      else openModal();
    }
  };

  const userClickHandler = () => {
    if (!isLoggedIn) {
      openModal();
    }
  };

  return (
    <div>
      <nav className={styles.fixedbar({ theme })}>
        <div className={styles.navbar({ theme })}>
          <div className={styles.logo({ theme })}>TripMingle</div>
          <div className={styles.user} onClick={userClickHandler}>
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
              onClick={dropDownClickHandler}
            />
          </div>
        </div>
      </nav>
      {isLoggedIn ? (
        <HeaderDropDown dropDownOpen={isOpen} closeHandler={closeModal} />
      ) : (
        <LoginModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Header;

import { useRouter } from 'next/navigation';
import * as styles from '@/styles/components/header/header-drop-down.css';
import useModal from '@/hooks/useModal';
import LogoutModal from '../common/LogoutModal';
import { useEffect } from 'react';
import Link from 'next/link';

type Props = {
  dropDownOpen: boolean;
  closeHandler: () => void;
};

const HeaderDropDown = ({ dropDownOpen, closeHandler }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  const logoutHandler = () => {
    closeHandler();
    openModal();
  };

  useEffect(() => {
    window.addEventListener('scroll', closeHandler);

    return () => {
      window.removeEventListener('scroll', closeHandler);
    };
  }, []);

  if (dropDownOpen)
    return (
      <div className={styles.background} onClick={closeHandler}>
        <div className={styles.container}>
          <ul className={styles.menuContainer}>
            <li className={styles.menuItem}>
              <Link key="Mypage" href="/mypage/info">
                마이페이지
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link key="WriteBoard" href="/write/board">
                동행글 작성
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link key="WritePost" href="/write/post">
                정보글 작성
              </Link>
            </li>
            <li className={styles.menuItem} onClick={logoutHandler}>
              로그아웃
            </li>
          </ul>
        </div>
      </div>
    );
  else return <LogoutModal isOpen={isOpen} closeModal={closeModal} />;
};

export default HeaderDropDown;

import { useRouter } from 'next/navigation';
import * as styles from '@/styles/components/header/header-drop-down.css';
import useModal from '@/hooks/useModal';
import LogoutModal from '../common/LogoutModal';
import { useEffect } from 'react';

type Props = {
  dropDownOpen: boolean;
  closeHandler: () => void;
};

const HeaderDropDown = ({ dropDownOpen, closeHandler }: Props) => {
  const router = useRouter();

  const { isOpen, openModal, closeModal } = useModal();

  const myPageHandler = () => {
    closeHandler();
    router.push('/mypage');
  };

  const writeBoardHandler = () => {
    closeHandler();
    router.push('/write/board');
  };

  const writePostHandler = () => {
    closeHandler();
    router.push('/write/post');
  };

  const logoutHandler = () => {
    closeHandler();
    openModal();
    console.log(isOpen);
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
            <li className={styles.menuItem} onClick={myPageHandler}>
              마이페이지
            </li>
            <li className={styles.menuItem} onClick={writeBoardHandler}>
              동행글 작성
            </li>
            <li className={styles.menuItem} onClick={writePostHandler}>
              정보글 작성
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

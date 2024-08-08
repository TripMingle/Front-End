import { useRouter } from 'next/navigation';
import * as styles from '@/styles/components/header/header-drop-down.css';
import useModal from '@/hooks/useModal';
import LogoutModal from '../common/LogoutModal';

const HeaderDropDown = () => {
  const router = useRouter();

  const { isOpen, openModal, closeModal } = useModal();

  const myPageHandler = () => {
    router.push('/mypage');
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.menuContainer}>
          <li className={styles.menuItem} onClick={myPageHandler}>
            마이페이지
          </li>
          <li className={styles.menuItem} onClick={openModal}>
            로그아웃
          </li>
        </ul>
      </div>
      <LogoutModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default HeaderDropDown;

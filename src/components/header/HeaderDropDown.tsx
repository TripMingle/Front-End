import { useRouter } from 'next/navigation';
import * as styles from '@/styles/components/header/header-drop-down.css';
import { useUserStore } from '@/store/userStore';
import { removeToken } from '@/utils/token';

const HeaderDropDown = () => {
  const router = useRouter();
  const logout = useUserStore((state) => state.logout);

  const myPageHandler = () => {
    router.push('/mypage');
  };

  const logoutHandler = () => {
    removeToken();
    logout();
  };

  return (
    <div className={styles.container}>
      <ul className={styles.menuContainer}>
        <li className={styles.menuItem} onClick={myPageHandler}>
          마이페이지
        </li>
        <li className={styles.menuItem} onClick={logoutHandler}>
          로그아웃
        </li>
      </ul>
    </div>
  );
};

export default HeaderDropDown;

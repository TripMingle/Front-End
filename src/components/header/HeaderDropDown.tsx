import { useUserStore } from '@/store/userStore';
import * as styles from '@/styles/components/header/header-drop-down.css';
import { useRouter } from 'next/navigation';

const HeaderDropDown = () => {
  const router = useRouter();
  const logout = useUserStore((state) => state.logout);

  const mypageClickHandler = () => {
    router.push('/mypage');
  };

  return (
    <div className={styles.container}>
      <ul className={styles.menuContainer}>
        <li className={styles.menuItem} onClick={mypageClickHandler}>
          마이페이지
        </li>
        <li className={styles.menuItem} onClick={logout}>
          로그아웃
        </li>
      </ul>
    </div>
  );
};

export default HeaderDropDown;

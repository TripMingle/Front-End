import * as styles from '@/styles/mypage/mypage-header.css';
import HeaderItem from './HeaderItem';

const MypageHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.mypageTitle}>마이페이지</p>
      <div className={styles.itemListContainer}>
        <HeaderItem title="info" />
        <HeaderItem title="write" />
        <HeaderItem title="join" />
      </div>
    </div>
  );
};

export default MypageHeader;

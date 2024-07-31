import { style } from '@vanilla-extract/css';
import * as styles from '@/styles/components/header/header.css';
import Image from 'next/image';

const HeaderProfile = ({
  url,
  nickName,
  isLoggedIn,
}: {
  url: string;
  nickName: string;
  isLoggedIn: boolean;
}) => {
  return (
    <div className={styles.profileContainer}>
      <Image
        src={url || '/icons/profile.svg'}
        width={36}
        height={36}
        alt="profile"
        className={styles.profile}
      />
      {isLoggedIn ? (
        <>
          <span className={styles.name}>{nickName}</span>
          <span className={styles.text}>님 안녕하세요!</span>
        </>
      ) : (
        '로그인이 필요합니다.'
      )}
    </div>
  );
};

export default HeaderProfile;

import { style } from '@vanilla-extract/css';
import * as styles from '@/styles/components/header/header.css';
import Image from 'next/image';

const HeaderProfile = ({ url }: { url: string }) => {
  return (
    <div className={styles.profileContainer}>
      <Image
        src={url ? url : '/icons/profile.svg'}
        width={36}
        height={36}
        alt="profile"
        className={styles.profile}
      />
      <span className={styles.name}>닉네임</span>
      <span className={styles.text}>님 안녕하세요!</span>
    </div>
  );
};

export default HeaderProfile;

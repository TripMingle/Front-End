import Image from 'next/image';
import * as styles from '@/styles/components/header/header.css';
import { useUserStore } from '@/store/userStore';

const HeaderProfile = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const url = useUserStore((state) => state.imageUrl);
  const nickName = useUserStore((state) => state.nickName);

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
          <span className={styles.text}> 님 안녕하세요!</span>
        </>
      ) : (
        <div>로그인이 필요합니다.</div>
      )}
    </div>
  );
};

export default HeaderProfile;

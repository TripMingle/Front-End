import '@/styles/font.css';
import NonProfileHeader from '@/components/header/NonProfileHeader';
import * as styles from '@/styles/login/page.css';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <NonProfileHeader />
      <div className={styles.pageContainer}>
        <p className={styles.logo}>TripMingle</p>
        <span className={styles.explain}>
          로그인을 통해 여행을 즐겨보세용가리
        </span>
        <button className={styles.kakaoButtonContainer}>
          <Image
            src="/icons/kakaoIcon.svg"
            alt="kakaoIcon"
            width={18}
            height={16}
          />
          <span className={styles.kakaoLoginText}>카카오로 간편 로그인</span>
        </button>
        <div className={styles.signupContainer}>
          <span className={styles.text}>회원이 아니라면 ? </span>
          <button className={styles.signupButton}>회원가입</button>
        </div>
      </div>
    </>
  );
};

export default Page;

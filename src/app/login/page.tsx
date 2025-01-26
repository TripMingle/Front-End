import * as styles from '@/styles/login/page.css';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  // TODO: 백엔드 배포되면 KAKAO_AUTH_URL이동으로 수정
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${window.location.origin}/login/kakao&response_type=code`;

  return (
    <>
      <div className={styles.pageContainer}>
        <p className={styles.logo}>TripMingle</p>
        <span className={styles.explain}>로그인하고 여행을 계속해요</span>
        <Link
          className={styles.kakaoButtonContainer}
          key="Signup"
          href="/signup"
          replace
        >
          <Image
            src="/icons/kakaoIcon.svg"
            alt="kakaoIcon"
            width={18}
            height={16}
          />
          <span className={styles.kakaoLoginText}>카카오로 간편 로그인</span>
        </Link>
      </div>
    </>
  );
};

export default Page;

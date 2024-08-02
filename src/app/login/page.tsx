'use client';
import '@/styles/font.css';
import NonProfileHeader from '@/components/header/NonProfileHeader';
import * as styles from '@/styles/login/page.css';
import Image from 'next/image';

const Page = () => {
  const kakaoClickHandler = async () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  };

  //   TODO 회원가입 버튼 여부 결정하고 수정해야 할 듯
  //   const signupClickHandler = async () => {
  //     router.push('/signup');
  //   };


  return (
    <>
      <NonProfileHeader />
      <div className={styles.pageContainer}>
        <p className={styles.logo}>TripMingle</p>
        <span className={styles.explain}>로그인하고 여행을 계속해요</span>
        <button
          className={styles.kakaoButtonContainer}
          onClick={kakaoClickHandler}
        >
          <Image
            src="/icons/kakaoIcon.svg"
            alt="kakaoIcon"
            width={18}
            height={16}
          />
          <span className={styles.kakaoLoginText}>카카오로 간편 로그인</span>
        </button>
        {/* <div className={styles.signupContainer}>
          <span className={styles.text}>회원이 아니라면 ? </span>
          <button onClick={signupClickHandler} className={styles.signupButton}>
            회원가입
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Page;

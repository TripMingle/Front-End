'use client';
import { kakaoLogin } from '@/api/user';
import NonProfileHeader from '@/components/header/NonProfileHeader';
import { useUserStore } from '@/store/userStore';
import { pageContainer } from '@/styles/login/page.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [result, setResult] = useState<string>('로그인 완료');
  const login = useUserStore((state) => state.login);

  /* 
  로그인 요청 시 memberState(true) : 회원일 경우
  이전 페이지로 이동(없을 시 홈으로 이동)
  memberState(false) : 비회원일 경우
  회원가입 페이지로 이동 
  */

  const kakaoLoginHandler = async (code: string) => {
    const data = await kakaoLogin(code);
    setIsLoading(false);
    if (data) {
      const info = data.data;
      if (info.memberState) {
        login(info.profileImage, info.nickName);

        const prev = window.sessionStorage.getItem('prevPage');

        if (prev) {
          window.sessionStorage.removeItem('prevPage');
          router.replace(prev);
        } else router.push('/');
      } else {
        router.replace('/signup');
      }
    } else {
      setResult('로그인 실패');
      router.push('/');
    }
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      kakaoLoginHandler(code);
    }
  }, []);

  return (
    <>
      <NonProfileHeader />
      <div className={pageContainer}>{isLoading ? '로그인중' : result}</div>
    </>
  );
};

export default Page;

'use client';
import { kakaoLogin } from '@/api/user';
import NonProfileHeader from '@/components/header/NonProfileHeader';
import { pageContainer } from '@/styles/login/page.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const kakaoLoginHandler = async (code: string) => {
    const data = await kakaoLogin(code);
    setIsLoading(false);
    if (data) {
      const prev = window.sessionStorage.getItem('prevPage');
      if (prev) {
        window.sessionStorage.removeItem('prev');
        router.push(prev);
      } else router.push('/');
    } else {
      router.push('/signup');
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
      <div className={pageContainer}>
        {isLoading ? '로그인중' : '로그인완료'}
      </div>
    </>
  );
};

export default Page;

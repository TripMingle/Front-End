'use client';
import { kakaoLogin } from '@/api/user';
import NonProfileHeader from '@/components/header/NonProfileHeader';
import { pageContainer } from '@/styles/login/page.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  /*
  현재 헤더에서 로그인 버튼 클릭 시
  페이지 정보 sessionStorage에 저장
  login완료되면 sessionStroage에서 prev값이 있으면 prev값으로 이동
  없으면 / 메인으로 이동

  헤더 제외 다른 컴포넌트에서 로그인 페이지로 이동할 경우가 생기면
  같은 코드를 계속 써야 하므로 나중에는 수정이 필요할 것 같다.
   */

  const kakaoLoginHandler = async (code: string) => {
    const data = await kakaoLogin(code);
    if (data) {
      setIsLoading(true);
      const prev = window.sessionStorage.getItem('prevPage');
      if (prev) {
        window.sessionStorage.removeItem('prev');
        router.push(prev);
      } else router.push('/');
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
        {isLoading ? '로그인완료여' : '로그인중임'}
      </div>
    </>
  );
};

export default Page;

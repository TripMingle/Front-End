'use client';

import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error('Error occurred:', error);
  const router = useRouter();
  return (
    <div>
      <h2>잘못된 나라 입력입니다.</h2>
      <p>{error.message}</p>
      <button onClick={() => router.replace('/')}>메인 페이지로 이동하기</button>
    </div>
  );
}

'use client';

import ErrorComponent from '@/components/common/ErrorComponent';
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
    <ErrorComponent
      title="입력한 나라를 찾을 수 없습니다."
      message="현재는 Italy만 가능합니다"
      button="메인페이지로 이동하기"
      handler={() => router.replace('/')}
    />
  );
}

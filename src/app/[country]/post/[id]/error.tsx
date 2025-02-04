'use client';

import ErrorComponent from '@/components/common/ErrorComponent';
import { usePathname, useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error('Error occurred:', error);
  const router = useRouter();
  const pathname = usePathname();
  const country = pathname.split('/')[1];

  return (
    <ErrorComponent
      title="해당 게시물을 찾을 수 없습니다."
      message=""
      button="정보 게시글 보러가기"
      handler={() => router.replace(`/${country}/post`)}
    />
  );
}

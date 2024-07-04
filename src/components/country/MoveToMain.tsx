'use client';
import { redirect, useRouter } from 'next/navigation';

const MoveToMain = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push('/');
  };

  return <div onClick={() => clickHandler()}>{'아시아 > 중국'}</div>;
};

export default MoveToMain;

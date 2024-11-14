'use client';

import { usePathname } from 'next/navigation';
import TransparentHeader from './TransparentHeader';
import NonProfileHeader from './NonProfileHeader';
import Header from './Header';

const ConditionalHeader = () => {
  const pathname = usePathname();

  // 경로에 따른 헤더 컴포넌트 선택
  if (pathname === '/') {
    return <TransparentHeader />;
  }

  if (pathname === '/login' || pathname === '/signup') {
    return <NonProfileHeader />;
  }

  return <Header />;
};

export default ConditionalHeader;

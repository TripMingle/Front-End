import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 현재 유저의 세션/토큰을 확인
  const accessToken = request.cookies.get('accessToken'); // 실제 사용하는 토큰 이름으로 변경
  const isLoggedIn = !!accessToken?.value;

  const pathname = request.nextUrl.pathname;

  // /mypage로 시작하는 경로에 대해서만 체크
  if (pathname.startsWith('/mypage') || pathname.startsWith('/write')) {
    if (!isLoggedIn) {
      // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// 미들웨어가 적용될 경로 설정
export const config = {
  matcher: ['/mypage/:path*', '/mypage', '/write/:path*', '/write'],
};

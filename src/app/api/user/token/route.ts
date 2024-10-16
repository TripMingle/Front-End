import {
  getRefreshToken,
  storeToken,
} from '@/utils/server/token';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = `/auth/refresh`;

  const token = await getRefreshToken();

  if (!token)
    return NextResponse.json(
      { error: 'access token이 없거나 만료되었습니다.' },
      { status: 500 },
    );

  const res = await fetch(`${baseurl}${pathname}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Refresh: `${token}`,
    },
  });

  if (!res.ok) throw new Error('액세스 토큰 재발급 실패');

  const accessToken = res.headers.get('access-token');
  const refreshToken = res.headers.get('refresh-token');

  if (accessToken && refreshToken) {
    storeToken(accessToken.replace('Bearer ', ''), refreshToken);
  }
  return NextResponse.json('액세스토큰 재발급 성공', { status: 200 });
};

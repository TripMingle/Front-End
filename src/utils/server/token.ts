'use server';

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const storeKakaoAuthorization = (authorization: string) => {
  cookies().set('kakaoAuthorization', authorization, {
    httpOnly: true,
    maxAge: 3600, // 1시간
  });
};

export const removeKakaoAuthorization = () => {
  cookies().delete('kakaoAuthorization');
};

export const getKakaoAuthorization = async () => {
  return cookies().get('kakaoAuthorization');
};

export const storeToken = async (access: string, refresh: string) => {
  cookies().set('accessToken', access, {
    httpOnly: true,
    secure: true,
  });
  cookies().set('refreshToken', refresh, {
    httpOnly: true,
    secure: true,
  });
};

export const removeToken = () => {
  cookies().delete('accessToken');
  cookies().delete('refreshToken');
};

export const getAccessToken = async () => {
  return cookies().get('accessToken');
};

export const getRefreshToken = async () => {
  return cookies().get('refreshToken');
};

export const hasAccessToken = async () => {
  return !!cookies().get('accessToken');
};

export const refreshAccessToken = async () => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = `/auth/refresh`;

  const token = await getRefreshToken();

  if (!token) throw new Error('access token이 없거나 만료되었습니다.');

  const res = await fetch(`${baseurl}${pathname}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Refresh: `${token.value}`,
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

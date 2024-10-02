'use server';

import { cookies } from 'next/headers';

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

import {
  getKakaoAuthorization,
  removeKakaoAuthorization,
  storeToken,
} from '@/utils/server/token';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = `/kakao/join`;
  const body = req.body;
  let kakaoAuthorization = await getKakaoAuthorization();

  const res = await fetch(`${baseurl}${pathname}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Kakao-Authorization': `${kakaoAuthorization}`,
    },
    body,
    // @ts-ignore -- 연결이 단방향임을 나타냄
    duplex: 'half',
  });

  if (!res.ok) {
    const data = await res.json();
    if (res.status === 409 && data.code === 'U003') {
      return '중복된 닉네임 입니다.';
    }
  }

  const accessToken = res.headers.get('access-token');
  const refreshToken = res.headers.get('refresh-token');

  if (accessToken && refreshToken) {
    storeToken(accessToken.replace('Bearer ', ''), refreshToken);
  }

  removeKakaoAuthorization();

  return res;
};

import {
  getKakaoAuthorization,
  removeKakaoAuthorization,
  storeToken,
} from '@/utils/server/token';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = `/kakao/join`;
  const body = req.body;

  if (process.env.TEST) {
    const body = await req.json();
    const { nickName } = body;
    storeToken('temporalAccessToken', 'temporalRefreshToken');
    return NextResponse.json({
      data: { profileImage: '', nickName: nickName },
    });
  }

  let kakaoAuthorization = await getKakaoAuthorization();

  const res = await fetch(`${baseurl}${pathname}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Kakao-Authorization': `${kakaoAuthorization?.value}`,
    },
    body,
    // @ts-ignore -- 연결이 단방향임을 나타냄
    duplex: 'half',
  });

  if (!res.ok) {
    console.log(res);
    const data = await res.json();
    if (res.status === 409 && data.code === 'U003') {
      return NextResponse.json(res, { status: res.status });
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

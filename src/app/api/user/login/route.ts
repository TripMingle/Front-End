import { storeKakaoAuthorization, storeToken } from '@/utils/server/token';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  let pathname = '/kakao/callback';
  const params = req.nextUrl.searchParams.get('code');

  try {
    // 카카오 로그인 코드로, 카카오 액세스토큰 발급 받기
    const res = await fetch(`${baseurl}${pathname}?code=${params}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      if (data.data.access_token) {
        const kakaoAuthorization = data.data.access_token;
        storeKakaoAuthorization(kakaoAuthorization);

        // 카카오 액세스토큰으로 자체 토큰 발급 받기
        const res = await fetch(`${baseurl}/kakao/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Kakao-Authorization': kakaoAuthorization,
          },
        });

        if (!res.ok) throw new Error('액세스토큰 발급 실패');

        const accessToken = res.headers.get('access-token');
        const refreshToken = res.headers.get('refresh-token');

        if (accessToken && refreshToken) {
          storeToken(accessToken.replace('Bearer ', ''), refreshToken);
        }

        return res;
      } else {
        throw new Error('카카오 액세스토큰 발급 실패');
      }
    } else {
      throw new Error('카카오 액세스토큰 발급 실패');
    }
  } catch (error) {
    console.error('Login error:', error);

    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
};

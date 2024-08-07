import {
  getKakaoAuthorization,
  removeKakaoAuthorization,
  storeKakaoAuthorization,
  storeToken,
} from '@/utils/token';

export const acquireAccessToken = async (code: string) => {
  try {
    const params = {
      code: code,
    };
    const queryString = new URLSearchParams(params).toString();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/kakao/callback?${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!res.ok) throw new Error('액세스 토큰 받기 실패');

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const kakaoSignup = async (nickName: string, nationality: string) => {
  try {
    const kakaoAuthorization = getKakaoAuthorization();
    const data = {
      nickName,
      nationality,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/kakao/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Kakao-Authorization': `${kakaoAuthorization}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('회원가입 실패');
    const accessToken = res.headers.get('access-token');
    const refreshToken = res.headers.get('refresh-token');

    if (accessToken && refreshToken) {
      storeToken(accessToken.replace('Bearer ', ''), refreshToken);
      removeKakaoAuthorization();
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const kakaoLogin = async (code: string) => {
  try {
    const token = await acquireAccessToken(code);
    const kakaoAuthorization = token.data.access_token;
    storeKakaoAuthorization(kakaoAuthorization);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/kakao/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Kakao-Authorization': `${kakaoAuthorization}`,
      },
    });

    if (!res.ok) throw new Error('로그인 실패');
    const accessToken = res.headers.get('access-token');
    const refreshToken = res.headers.get('refresh-token');

    if (accessToken && refreshToken) {
      storeToken(accessToken.replace('Bearer ', ''), refreshToken);
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const checkNickName = async (nickName: string) => {
  try {
  } catch (error) {}
};

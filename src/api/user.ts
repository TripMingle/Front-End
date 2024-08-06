import { useUserStore } from '@/store/userStore';
import { storeToken } from '@/utils/token';

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

    const data = await res.json();

    const access_token = data.data.access_token;
    const refresh_token = data.data.refresh_token;

    storeToken(access_token, refresh_token);

    return access_token;
  } catch (error) {
    console.log(error);
  }
};

export const kakaoSignup = async () => {};

export const kakaoLogin = async (code: string) => {
  try {
    const access_token = await acquireAccessToken(code);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/kakao/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Kakao-Authorization': `${access_token}`,
      },
    });

    if (!res.ok) throw new Error('로그인 실패');

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const checkNickName = async (nickName: string) => {
  try {
  } catch (error) {}
};

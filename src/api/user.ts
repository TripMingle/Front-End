import {
  getKakaoAuthorization,
  getRefreshToken,
  getToken,
  removeKakaoAuthorization,
  storeKakaoAuthorization,
  storeToken,
} from '@/utils/token';
import apiFetch from '.';

export const acquireAccessToken = async (code: string) => {
  const params = {
    code: code,
  };
  return apiFetch().get(`/kakao/callback`, false, params);
};

export const kakaoSignup = async (
  nickName: string,
  nationality: string,
  selfIntroduction: string,
) => {
  try {
    const kakaoAuthorization = getKakaoAuthorization();
    const data = {
      nickName,
      nationality,
      selfIntroduction,
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/kakao/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Kakao-Authorization': `${kakaoAuthorization}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const data = await res.json();
      if (res.status === 409 && data.code === 'U003') {
        return data.message;
      } else {
        throw new Error('회원가입 실패');
      }
    }

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
  const params = {
    nickName: `${nickName}`,
  };
  return apiFetch().get('/auth/validate/duplication', false, params);
};

export const kakaoLogout = async () => {
  // apiFetch 사용하기엔 res.json()에서 오류
  try {
    const token = getToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error('로그아웃 실패');
    return res.ok;
  } catch (error) {
    console.error(error);
  }
};

export const updateAccessToken = async () => {
  try {
    const token = getRefreshToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
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
    return accessToken || '';
  } catch (error) {
    console.error(error);
  }
};

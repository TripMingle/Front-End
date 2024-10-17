import { getFetch, postFetch } from '.';

export const kakaoLogin = async (code: string) => {
  return getFetch(`/user/login?code=${code}`);
};

export const kakaoLogout = async () => {
  try {
    // return 값이 res.json()이 아니라
    // res.ok 이기 때문에 postFetch 사용하면 안됨

    const res = await fetch(`/api/user/logout`, {
      method: 'POST',
    });

    if (!res.ok) throw new Error('로그아웃 실패');
    return res.ok;
  } catch (error) {
    console.error(error);
  }
};

export const kakaoSignup = async (
  nickName: string,
  nationality: string,
  selfIntroduction: string,
) => {
  try {
    const data = {
      nickName,
      nationality,
      selfIntroduction,
    };

    const res = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (typeof res == 'string') return res;

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const checkNickName = async (nickName: string) => {
  return getFetch(`/user/signup/validate?nickname=${nickName}`);
};

export const getUserInfo = async () => {
  return getFetch(`/user/info`);
};

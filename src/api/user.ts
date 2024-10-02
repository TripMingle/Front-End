import { getFetch, postFetch } from '.';

export const kakaoLogin = async (code: string) => {
  try {
    const res = await fetch(`/api/user/login?code=${code}`);

    if (!res.ok) throw new Error('로그인 실패');

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const kakaoLogout = async () => {
  return postFetch(`/user/logout`);
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

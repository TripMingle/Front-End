import Cookies from 'js-cookie';

export const storeKakaoAuthorization = (kakaoAuthorization: string) => {
  Cookies.set('kakao_authorization', kakaoAuthorization);
};

export const removeKakaoAuthorization = () => {
  Cookies.remove('kakao_authorization');
};

export const getKakaoAuthorization = () => {
  const kakaoAuthorization = Cookies.get('kakao_authorization');
  return kakaoAuthorization;
};

export const storeToken = (accessToken: string, refreshToken: string) => {
  Cookies.set('access_token', accessToken);
  Cookies.set('refresh_token', refreshToken);
};

export const getToken = () => {
  const clientAccessToken = Cookies.get('access_token');
  return clientAccessToken;
};

export const removeToken = () => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
};

export const getRefreshToken = () => {
  const clientRefreshToken = Cookies.get('refresh_token');
  return clientRefreshToken;
};

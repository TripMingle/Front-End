import Cookies from 'js-cookie';

export const storeToken = (access_token: string, refresh_token: string) => {
  Cookies.set('access_token', access_token);
  Cookies.set('refresh_token', refresh_token);
};

export const getToken = async () => {
  const clientAccessToken = Cookies.get('access_token');
  return clientAccessToken;
};

export const getRefreshToken = async () => {
  const clientRefreshToken = Cookies.get('refresh_token');
  return clientRefreshToken;
};

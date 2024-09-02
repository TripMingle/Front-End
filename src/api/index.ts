import { getToken } from '@/utils/token';
import { updateAccessToken } from './user';

const apiFetch = () => {
  const baseurl = `${process.env.NEXT_PUBLIC_API_URL}`;
  const defaultConfig: RequestInit = {
    headers: { 'Content-Type': 'application/json' },
  };

  const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  if (token && defaultConfig.headers) {
    const authorization = { Authorization: `Bearer ${token}` };
    defaultConfig.headers = { ...defaultConfig.headers, ...authorization };
  }

  /**
   *
   * @param useToken - 토큰 사용 여부
   */
  const request = async (
    url: string,
    config: RequestInit,
    useToken: boolean,
  ) => {
    if (!url.startsWith('http')) {
      url = `${baseurl}${url}`;
    }

    if (useToken) {
      const token = getToken();

      if (token) {
        const authorization = { Authorization: `Bearer ${token}` };
        defaultConfig.headers = { ...defaultConfig.headers, ...authorization };
      } else {
        throw new Error('로그인이 필요합니다.');
      }
    }

    config = { ...config, ...defaultConfig };
    config.headers = { ...config.headers, ...defaultConfig.headers };

    try {
      const response = await fetch(url, config);

      // 액세스토큰이 만료 됐을 때
      if (response.status === 403) {
        const result = await updateAccessToken();
        if (result !== '') {
          const authorization = { Authorization: `Bearer ${result}` };
          config.headers = { ...config.headers, ...authorization };
          const response2 = await fetch(url, config);
          if (response2.ok) return response2.json();
        } else {
          throw new Error('액세스 토큰 만료');
        }
      }
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  // post, patch, delete는 모두 Token이 필요하므로, useToken을 true로 설정
  return {
    request,
    get: (
      url: string,
      useToken: boolean = false,
      params: ParamsType = {},
      config: RequestInit = {},
    ) => {
      if (Object.keys(params).length > 0) {
        url = url + '?' + new URLSearchParams(params).toString();
      }
      return request(
        url,
        {
          ...config,
          method: 'GET',
        },
        useToken,
      );
    },
    post: (url: string, config: RequestInit = {}) => {
      return request(
        url,
        {
          ...config,
          method: 'POST',
        },
        true,
      );
    },
    patch: (url: string, config: RequestInit = {}) => {
      return request(
        url,
        {
          ...config,
          method: 'PATCH',
        },
        true,
      );
    },
    delete: (url: string, config: RequestInit = {}) => {
      return request(
        url,
        {
          ...config,
          method: 'DELETE',
        },
        true,
      );
    },
  };
};

type ParamsType = {
  [key: string]: string;
};

export default apiFetch;

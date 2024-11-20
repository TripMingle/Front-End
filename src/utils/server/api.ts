import { NextRequest } from 'next/server';
import { getAccessToken, refreshAccessToken } from './token';

export const baseurl = process.env.API_URL;

const baseHeaders = {
  'Content-Type': 'application/json',
};

const ERROR_MESSAGES = {
  400: '잘못된 요청입니다.',
  401: '인증이 필요합니다.',
  403: '권한이 없습니다.',
  404: '리소스를 찾을 수 없습니다.',
  500: '서버 오류가 발생했습니다.',
  default: '알 수 없는 오류가 발생했습니다.',
} as const;

/**
 *
 * @param handler API 요청 수행하는 함수
 * @param requiresAuth  인증이 필요한지 확인. true일 경우 사용자 액세스토큰 필요.
 * @returns
 */
export const withApiHandler = (
  handler: (req: NextRequest, config: RequestInit) => Promise<Response>,
  requiresAuth: boolean = true,
) => {
  return async (req: NextRequest) => {
    try {
      // 기본 설정
      const config: RequestInit = {
        headers: {} as HeadersInit,
      };

      // 토큰 처리
      let token;
      if (requiresAuth) {
        // 인증이 필요한 경우 - 반드시 실제 사용자 토큰 필요
        const accesstoken = await getAccessToken();
        token = accesstoken?.value;

        if (!token) {
          return new Response(
            JSON.stringify({ message: ERROR_MESSAGES[401] }),
            { status: 401, headers: baseHeaders },
          );
        }
      } else {
        // 인증이 필요없는 경우 - 가짜 액세스 토큰 사용
        const accesstoken = await getAccessToken();
        token = accesstoken?.value || process.env.ACCESS_TOKEN;
      }

      // 헤더에 토큰만 기본 설정
      config.headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await handler(req, config);

      // 토큰 만료시 재시도 (인증 필요한 경우만)
      if (response.status === 401 && requiresAuth) {
        const newToken = await refreshAccessToken();
        if (!newToken) {
          return new Response(
            JSON.stringify({ message: ERROR_MESSAGES[401] }),
            { status: 401, headers: baseHeaders },
          );
        }

        config.headers = {
          Authorization: `Bearer ${newToken}`,
        };
        return await handler(req, config);
      }

      if (!response.ok) {
        const status = response.status;
        const message =
          ERROR_MESSAGES[status as keyof typeof ERROR_MESSAGES] ||
          ERROR_MESSAGES.default;
        return new Response(JSON.stringify({ message }), {
          status,
          headers: baseHeaders,
        });
      }

      return response;
    } catch (error) {
      return new Response(JSON.stringify({ message: ERROR_MESSAGES.default }), {
        status: 500,
        headers: baseHeaders,
      });
    }
  };
};

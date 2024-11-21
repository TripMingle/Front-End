import { baseurl, withApiHandler } from '@/utils/server/api';
import { getAccessToken } from '@/utils/server/token';
import { NextRequest } from 'next/server';

export const GET = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    const pathname = `/board/schedule`;
    const boardId = req.nextUrl.searchParams.get('boardId');

    return await fetch(`${baseurl}${pathname}/${boardId}`, {
      method: 'GET',
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
      },
    });
  },
  false,
);

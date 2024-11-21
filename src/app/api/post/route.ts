import { baseurl, withApiHandler } from '@/utils/server/api';
import { NextRequest } from 'next/server';

export const GET = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    const pathname = `/postings`;
    const postId = req.nextUrl.searchParams.get('postId');

    return await fetch(`${baseurl}${pathname}/${postId}/details`, {
      method: 'GET',
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
      },
    });
  },
  false,
);

export const POST = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    const pathname = `/postings`;
    const body = req.body;

    return await fetch(`${baseurl}${pathname}`, {
      method: 'POST',
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
      },
      body,
      // @ts-ignore -- 연결이 단방향임을 나타냄
      duplex: 'half',
    });
  },
);

import { baseurl, withApiHandler } from '@/utils/server/api';
import { NextRequest } from 'next/server';

export const POST = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    const pathname = `/board/comment`;
    const body = req.body;

    return await fetch(`${baseurl}${pathname}`, {
      ...config,
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

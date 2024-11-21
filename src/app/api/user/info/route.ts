import { baseurl, withApiHandler } from '@/utils/server/api';
import { NextRequest } from 'next/server';

export const GET = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    const pathname = `/auth/info`;

    return await fetch(`${baseurl}${pathname}`, {
      method: 'GET',
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
      },
      cache: 'force-cache',
    });
  },
);

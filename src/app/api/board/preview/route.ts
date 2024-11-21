import { baseurl, withApiHandler } from '@/utils/server/api';
import { NextRequest } from 'next/server';

export const GET = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    const pathname = req.nextUrl.pathname.slice(4);
    const country = req.nextUrl.searchParams.get('country');

    return await fetch(`${baseurl}${pathname}/${country}`, {
      method: 'GET',
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
      },
    });
  },
  false,
);

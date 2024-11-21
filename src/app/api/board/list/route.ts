import { baseurl, withApiHandler } from '@/utils/server/api';
import { NextRequest } from 'next/server';

export const GET = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    const pathname = '/board';
    const country = req.nextUrl.searchParams.get('country');
    const page = req.nextUrl.searchParams.get('page');

    return await fetch(`${baseurl}${pathname}/${country}?page=${page}`, {
      ...config,
      method: 'GET',
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
      },
    });
  },
  false,
);

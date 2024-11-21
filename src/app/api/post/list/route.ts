import { baseurl, withApiHandler } from '@/utils/server/api';
import { NextRequest } from 'next/server';

export const GET = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    const pathname = '/postings';
    const country = req.nextUrl.searchParams.get('country');
    const postingType = req.nextUrl.searchParams.get('postingType');
    const page = req.nextUrl.searchParams.get('page');

    return await fetch(
      `${baseurl}${pathname}?country=${country}&postingType=${postingType}&page=${page}`,
      {
        method: 'GET',
        headers: {
          ...config.headers,
          'Content-Type': 'application/json',
        },
      },
    );
  },
  false,
);

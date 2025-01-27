import { baseurl, withApiHandler } from '@/utils/server/api';
import { NextRequest, NextResponse } from 'next/server';
import { mockCountryData } from '../../mock';

export const GET = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    if (process.env.TEST) {
      return NextResponse.json({
        data: mockCountryData,
      });
    }

    const pathname = req.nextUrl.pathname.slice(4);
    return await fetch(`${baseurl}${pathname}`, {
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

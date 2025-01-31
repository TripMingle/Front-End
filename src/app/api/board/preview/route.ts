import { baseurl, withApiHandler } from '@/utils/server/api';
import { NextRequest, NextResponse } from 'next/server';
import { mockBoardPreviewData } from '../../mock';

export const GET = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    if (process.env.TEST) {
      return NextResponse.json({
        data: mockBoardPreviewData,
      });
    }

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

import { baseurl, withApiHandler } from '@/utils/server/api';
import { NextRequest, NextResponse } from 'next/server';
import { mockBoardPreviewData, mockTotalBoardPreviewData } from '../../mock';

export const GET = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    if (process.env.TEST) {
      return NextResponse.json({
        data: mockTotalBoardPreviewData,
      });
    }

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

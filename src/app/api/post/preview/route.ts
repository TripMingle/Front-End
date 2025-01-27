import { baseurl, withApiHandler } from '@/utils/server/api';
import { NextRequest, NextResponse } from 'next/server';
import {
  mockRentalHomePreviewData,
  mockRestaurantPreviewData,
  mockSchedulePreviewData,
} from '../../mock';

export const GET = withApiHandler(
  async (req: NextRequest, config: RequestInit) => {
    const pathname = '/postings/preview';
    const country = req.nextUrl.searchParams.get('country');
    const postingType = req.nextUrl.searchParams.get('postingType');

    if (process.env.TEST) {
      switch (postingType) {
        case 'rentalHome':
          return NextResponse.json({ data: mockRentalHomePreviewData });
        case 'schedule':
          return NextResponse.json({ data: mockSchedulePreviewData });
        case 'restaurant':
          return NextResponse.json({ data: mockRestaurantPreviewData });
      }
    }

    return await fetch(
      `${baseurl}${pathname}?country=${country}&postingType=${postingType}`,
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

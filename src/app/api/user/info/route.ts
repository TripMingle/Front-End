import { getAccessToken } from '@/utils/server/token';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.NEXT_PUBLIC_API_URL}`;
  const pathname = `/auth/info`;

  const token = await getAccessToken();

  if (!token)
    return NextResponse.json(
      { error: 'access token이 없거나 만료되었습니다.' },
      { status: 500 },
    );

  return await fetch(`${baseurl}${pathname}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

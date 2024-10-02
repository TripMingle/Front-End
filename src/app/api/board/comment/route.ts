import { getAccessToken } from '@/utils/server/token';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = `/board/comment`;
  const body = req.body;
  let token = await getAccessToken();
  if (!token)
    return NextResponse.json(
      { error: 'access token이 없거나 만료되었습니다.' },
      { status: 500 },
    );

  return await fetch(`${baseurl}${pathname}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body,
    // @ts-ignore -- 연결이 단방향임을 나타냄
    duplex: 'half',
  });
};

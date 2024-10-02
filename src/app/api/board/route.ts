import { getAccessToken } from '@/utils/server/token';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = `/board/show`;
  const boardId = req.nextUrl.searchParams.get('boardId');
  let accesstoken = await getAccessToken();
  let token = accesstoken?.value || process.env.ACCESS_TOKEN;

  return await fetch(`${baseurl}${pathname}/${boardId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const POST = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = `/board`;
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

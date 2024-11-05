import { getAccessToken } from '@/utils/server/token';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = `/postings`;
  const body = req.body;
  const postId = req.nextUrl.searchParams.get('postId');

  let token = await getAccessToken();
  if (!token)
    return NextResponse.json(
      { error: 'access token이 없거나 만료되었습니다.' },
      { status: 500 },
    );
  console.log(`${baseurl}${pathname}/${postId}/comments`);

  return await fetch(`${baseurl}${pathname}/${postId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.value}`,
    },
    body,
    // @ts-ignore -- 연결이 단방향임을 나타냄
    duplex: 'half',
  });
};

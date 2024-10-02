import { getAccessToken } from '@/utils/server/token';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  const baseurl = `${process.env.NEXT_PUBLIC_API_URL}`;
  const pathname = `/board/comment`;
  const body = req.body;
  let accesstoken = await getAccessToken();
  let token = accesstoken?.value || process.env.ACCESS_TOKEN;

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

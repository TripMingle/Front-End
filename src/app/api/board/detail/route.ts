import { getAccessToken } from '@/utils/server/token';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.NEXT_PUBLIC_API_URL}`;
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

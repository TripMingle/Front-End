import { getAccessToken } from '@/utils/server/token';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.NEXT_PUBLIC_API_URL}`;
  const pathname = req.nextUrl.pathname.slice(4);
  const country = req.nextUrl.searchParams.get('country');
  let accesstoken = await getAccessToken();
  let token = accesstoken?.value || process.env.ACCESS_TOKEN;

  return await fetch(`${baseurl}${pathname}/${country}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

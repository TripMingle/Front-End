import { getAccessToken } from '@/utils/server/token';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = '/board';
  const country = req.nextUrl.searchParams.get('country');
  const page = req.nextUrl.searchParams.get('page');
  let accesstoken = await getAccessToken();
  let token = accesstoken?.value || process.env.ACCESS_TOKEN;

  console.log(`${baseurl}${pathname}/${country}?page=${page}`);

  return await fetch(`${baseurl}${pathname}/${country}?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

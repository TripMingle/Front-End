import { getAccessToken } from '@/utils/server/token';
import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.NEXT_PUBLIC_API_URL}`;
  const pathname = '/postings/preview';
  const country = req.nextUrl.searchParams.get('country');
  const postingType = req.nextUrl.searchParams.get('postingType');
  let accesstoken = await getAccessToken();
  let token = accesstoken?.value || process.env.ACCESS_TOKEN;

  let config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  return await fetch(
    `${baseurl}${pathname}?country=${country}&postingType=${postingType}`,
    config,
  );
};

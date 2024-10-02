import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.NEXT_PUBLIC_API_URL}`;
  const pathname = `/auth/validate/duplication`;
  const nickName = req.nextUrl.searchParams.get('nickName');

  return await fetch(`${baseurl}${pathname}?nickName=${nickName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

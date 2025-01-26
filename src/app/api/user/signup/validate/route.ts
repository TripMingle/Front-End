import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = `/auth/validate/duplication`;
  const nickName = req.nextUrl.searchParams.get('nickName');

  if (process.env.TEST)
    return NextResponse.json({ data: { duplicationStatus: false } });

  return await fetch(`${baseurl}${pathname}?nickName=${nickName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

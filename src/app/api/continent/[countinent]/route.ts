import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.API_URL}`;
  const pathname = req.nextUrl.pathname.slice(4);

  return await fetch(`${baseurl}${pathname}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

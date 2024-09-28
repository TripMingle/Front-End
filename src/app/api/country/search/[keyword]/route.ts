import { NextRequest } from 'next/server';

export const GET = async (req: NextRequest) => {
  const baseurl = `${process.env.NEXT_PUBLIC_API_URL}`;
  const pathname = req.nextUrl.pathname.slice(4);

  console.log(baseurl, pathname);

  return await fetch(`${baseurl}${pathname}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

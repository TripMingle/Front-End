'use server';

import { getAccessToken } from './token';

export const getBoardDetail = async (boardId: string) => {
  try {
    const baseurl = `${process.env.API_URL}`;
    const pathname = `/board/show`;
    let accesstoken = await getAccessToken();
    let token = accesstoken?.value || process.env.ACCESS_TOKEN;

    const res = await fetch(`${baseurl}${pathname}/${boardId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

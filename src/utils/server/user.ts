'use server';

import { cookies } from 'next/headers';

export const storeUserInfo = (nickName: string, imageUrl: string) => {
  cookies().set('nickName', nickName);
  cookies().set('imageUrl', imageUrl);
};

export const getUserInfo = async () => {
  const cookieStore = cookies();
  const nickName = (cookieStore.get('nickName') || '') as string;
  const imageUrl = (cookieStore.get('imageUrl') || '') as string;
  return {
    nickName,
    imageUrl,
  };
};

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import Cookies from 'js-cookie';

type userState = {
  isLoggedIn: boolean;
  imageUrl: string;
  nickName: string;
  login: (imageUrl: string, nickName: string) => void;
  logout: () => void;
};

export const useUserStore = create<userState>()((set) => ({
  isLoggedIn: !!Cookies.get('access_token'),
  imageUrl: Cookies.get('imageUrl') || '',
  nickName: Cookies.get('nickName') || '',
  login: (imageUrl: string, nickName: string) => {
    Cookies.set('imageUrl', imageUrl);
    Cookies.set('nickName', nickName);
    set({ isLoggedIn: true, imageUrl, nickName });
  },
  logout: () => {
    Cookies.remove('access_token');
    Cookies.remove('imageUrl');
    Cookies.remove('nickName');
    set({ isLoggedIn: false, imageUrl: '', nickName: '' });
  },
}));

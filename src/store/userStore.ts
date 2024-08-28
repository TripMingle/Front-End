import { create } from 'zustand';
import Cookies from 'js-cookie';
import { persist } from 'zustand/middleware';

type userState = {
  isLoggedIn: boolean;
  imageUrl: string;
  nickName: string;
  initialize: () => void;
  login: (imageUrl: string, nickName: string) => void;
  logout: () => void;
};

export const useUserStore = create<userState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      imageUrl: '',
      nickName: '',
      initialize: () => {
        set({
          isLoggedIn: !!Cookies.get('access_token'),
          imageUrl: Cookies.get('imageUrl') || '',
          nickName: Cookies.get('nickName') || '',
        });
      },
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
    }),
    {
      name: 'use-user-store',
      onRehydrateStorage: () => (state) => {
        state?.initialize();
      },
    },
  ),
);

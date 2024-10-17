import { create } from 'zustand';
import Cookies from 'js-cookie';

type userState = {
  isLoggedIn: boolean;
  imageUrl: string;
  nickName: string;
  initialize: () => void;
  login: (imageUrl: string, nickName: string) => void;
  logout: () => void;
};

export const useUserStore = create<userState>()((set) => ({
  isLoggedIn: false,
  imageUrl: '',
  nickName: '',
  initialize: () => {
    set({
      isLoggedIn: !!Cookies.get('isLoggedIn'),
      imageUrl: Cookies.get('imageUrl') || '',
      nickName: Cookies.get('nickName') || '',
    });
  },
  login: (imageUrl: string, nickName: string) => {
    Cookies.set('isLoggedIn', 'true');
    Cookies.set('imageUrl', imageUrl);
    Cookies.set('nickName', nickName);
    set({ isLoggedIn: true, imageUrl, nickName });
  },
  logout: () => {
    Cookies.remove('isLoggedIn');
    Cookies.remove('imageUrl');
    Cookies.remove('nickName');
    set({ isLoggedIn: false, imageUrl: '', nickName: '' });
  },
}));

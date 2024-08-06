import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type userState = {
  isLoggedIn: boolean;
  imageUrl: string;
  nickName: string;
  login: (imageUrl: string, nickName: string) => void;
  logout: () => void;
};

export const useUserStore = create<userState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      imageUrl: '',
      nickName: '',
      login: (imageUrl: string, nickName: string) =>
        set({ isLoggedIn: true, imageUrl, nickName }),
      logout: () => {
        set({ isLoggedIn: false, imageUrl: '', nickName: '' });
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type userState = {
  accessToken: string;
  imageUrl: string;
  nickName: string;
  login: (accessToken: string, imageUrl: string, nickName: string) => void;
  logout: () => void;
};

export const useUserStore = create<userState>()(
  persist(
    (set) => ({
      accessToken: '',
      imageUrl: '',
      nickName: '',
      login: (accessToken: string, imageUrl: string, nickName: string) =>
        set({ accessToken, imageUrl, nickName }),
      logout: () => {
        set({ accessToken: '', imageUrl: '', nickName: '' });
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

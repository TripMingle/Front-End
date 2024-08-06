import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type userState = {
  imageUrl: string;
  nickName: string;
  login: (imageUrl: string, nickName: string) => void;
  logout: () => void;
};

export const useUserStore = create<userState>()(
  persist(
    (set) => ({
      imageUrl: '',
      nickName: '',
      login: (imageUrl: string, nickName: string) =>
        set({ imageUrl, nickName }),
      logout: () => {
        set({ imageUrl: '', nickName: '' });
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

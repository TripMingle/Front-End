import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type PostState = {
  category: string;
  setCategory: (category: string) => void;
};

export const usePostStore = create<PostState>()(
  persist(
    (set) => ({
      category: 'RESTAURANT',
      setCategory: (category: string) => set({ category }),
    }),
    {
      name: 'post-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

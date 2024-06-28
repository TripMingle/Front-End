'use client';

import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import Navbar from '@/components/navbar/Navbar';
import '../styles/font.css';

export default function Home() {
  const useBearStore = create(
    combine({ bears: 0 }, (set) => ({
      increase: (by: number) => set((state) => ({ bears: state.bears + by })),
    })),
  );

  const BearCounter = () => {
    const bear = useBearStore((state) => state.bears);
    return <h1>Bear : {bear}</h1>;
  };

  const BearIncrease = () => {
    const increase = useBearStore((state) => state.increase);
    return <button onClick={() => increase(5)}>up</button>;
  };

  return (
    <main>
      <Navbar bg={true} />
      <div>안녕하세용</div>
      <BearCounter />
      <BearIncrease />
    </main>
  );
}

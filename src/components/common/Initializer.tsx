'use client';
import { useUserStore } from '@/store/userStore';
import { useEffect } from 'react';

const Initializer = () => {
  const userInitialize = useUserStore((state) => state.initialize);

  useEffect(() => {
    userInitialize();
  }, []);
  return null;
};

export default Initializer;

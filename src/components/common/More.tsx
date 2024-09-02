'use client';
import { usePostStore } from '@/store/postStore';
import { more } from '@/styles/country/page.css';
import { usePathname, useRouter } from 'next/navigation';

const More = ({ path, category }: { path: string; category: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const setCategory = usePostStore((state) => state.setCategory);

  const clickHandler = () => {
    if (path !== '/board') setCategory(category);
    router.push(pathname + path);
  };
  return (
    <span className={more} onClick={clickHandler}>
      {'더보기 > '}
    </span>
  );
};

export default More;

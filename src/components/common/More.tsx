'use client';
import { more } from '@/styles/country/page.css';
import { usePathname, useRouter } from 'next/navigation';

const More = ({ path }: { path: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const clickHandler = () => {
    router.push(pathname + path);
  };

  return (
    <span className={more} onClick={clickHandler}>
      {'더보기 > '}
    </span>
  );
};

export default More;

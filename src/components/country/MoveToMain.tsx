'use client';
import { countryText, moveToMain } from '@/styles/country/page.css';
import { useRouter } from 'next/navigation';

const MoveToMain = ({ country }: { country: string }) => {
  const router = useRouter();
  const clickHandler = () => {
    router.push('/');
  };

  return (
    <div className={moveToMain} onClick={() => clickHandler()}>
      <span>{'홈 > 아시아 > '}</span>
      <span className={countryText}>{country}</span>
    </div>
  );
};

export default MoveToMain;

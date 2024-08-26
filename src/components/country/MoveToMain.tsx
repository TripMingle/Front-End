'use client';
import { countryText, moveToMain } from '@/styles/country/page.css';
import { useRouter } from 'next/navigation';

const MoveToMain = ({ props }: { props: CountryInfo }) => {
  const router = useRouter();

  const continentClickHandler = () => {
    router.push('/');
  };

  const countryClickHandler = () => {
    router.push('/' + props.countryEnglishName);
  };

  const homeClickHandler = () => {
    router.push('/');
  };

  return (
    <div className={moveToMain}>
      <span onClick={homeClickHandler}>{'홈 > '}</span>
      <span onClick={continentClickHandler}>{`${props.continentName} > `}</span>
      <span className={countryText} onClick={countryClickHandler}>
        {props.countryName}
      </span>
    </div>
  );
};

export default MoveToMain;

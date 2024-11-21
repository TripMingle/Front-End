'use client';
import { useCountryStore } from '@/store/countryStore';
import { countryText, moveToMain } from '@/styles/country/page.css';
import { CountryInfo } from '@/types/main/country';
import { useRouter } from 'next/navigation';

const MoveToMain = ({ props }: { props: CountryInfo }) => {
  const router = useRouter();
  const { initialize, setContinent } = useCountryStore();

  const continentClickHandler = () => {
    const continentEnglishName = props.continentEnglishName.includes('/')
      ? props.continentEnglishName.split('/')[0]
      : props.continentEnglishName;
    const continentName = props.continentName.includes('/')
      ? props.continentName.split('/')[0]
      : props.continentName;
    setContinent(continentEnglishName, continentName);
    router.push('/');
  };

  const countryClickHandler = () => {
    router.push('/' + props.countryEnglishName);
  };

  const homeClickHandler = () => {
    initialize();
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

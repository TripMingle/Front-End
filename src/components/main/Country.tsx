import * as styles from '@/styles/main/country.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Country = ({ img, country }: { img: string; country: string }) => {
  const router = useRouter();
  const clickHandler = () => {
    router.push('/' + country);
  };

  return (
    <div className={styles.container} onClick={() => clickHandler()}>
      <Image
        className={styles.bgImage}
        src={img}
        fill
        sizes="160px"
        alt="country"
      />
      <div className={styles.bgOverlay}></div>
      <span className={styles.name}>{country}</span>
    </div>
  );
};

const tmpCountry = [
  { img: '/images/continent/asiaBg.png', country: '한국' },
  { img: '/images/continent/asiaBg.png', country: '일본' },
  { img: '/images/continent/asiaBg.png', country: '중국' },
  { img: '/images/continent/asiaBg.png', country: '베트남' },
  { img: '/images/continent/asiaBg.png', country: '태국' },
  { img: '/images/continent/asiaBg.png', country: '대만' },
  { img: '/images/continent/asiaBg.png', country: '필리핀' },
  { img: '/images/continent/asiaBg.png', country: '말레이시아' },
  { img: '/images/continent/asiaBg.png', country: '인도네시아' },
  { img: '/images/continent/asiaBg.png', country: '싱가포르' },
];

const Countries = () => {
  return (
    <ul className={styles.countryContainer}>
      {tmpCountry.map((e, i) => (
        <li key={i}>
          <Country img={e.img} country={e.country} />
        </li>
      ))}
    </ul>
  );
};

export default Countries;

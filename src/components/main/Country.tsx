import * as styles from '@/styles/main/country.css';
import Image from 'next/image';

const Country = ({ img, country }: { img: string; country: string }) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.bgImage}
        src={img}
        layout="fill"
        objectFit="cover"
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
    <div className={styles.countryContainer}>
      {tmpCountry.map((e) => (
        <div>
          <Country img={e.img} country={e.country} />
        </div>
      ))}
    </div>
  );
};

export default Countries;

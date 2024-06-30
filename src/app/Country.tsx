import * as styles from './Country.css';

const Country = ({ img, country }: { img: string; country: string }) => {
  return (
    <div className={styles.container}>
      <img className={styles.bgImage} src={img} alt="continent" />
      <div className={styles.bgOverlay}></div>
      <div className={styles.name}>{country}</div>
    </div>
  );
};

const tmpCountry = [
  { img: '/continent/asiaBg.png', country: '한국' },
  { img: '/continent/asiaBg.png', country: '일본' },
  { img: '/continent/asiaBg.png', country: '중국' },
  { img: '/continent/asiaBg.png', country: '베트남' },
  { img: '/continent/asiaBg.png', country: '태국' },
  { img: '/continent/asiaBg.png', country: '대만' },
  { img: '/continent/asiaBg.png', country: '필리핀' },
  { img: '/continent/asiaBg.png', country: '말레이시아' },
  { img: '/continent/asiaBg.png', country: '인도네시아' },
  { img: '/continent/asiaBg.png', country: '싱가포르' },
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

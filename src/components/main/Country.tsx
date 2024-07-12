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
        src={img ? img : '/images/mainbg.png'}
        fill
        sizes="160px"
        alt="country"
      />
      <div className={styles.bgOverlay}></div>
      <span className={styles.name}>{country}</span>
    </div>
  );
};

const Countries = ({ props }: { props: Country[] }) => {  
  return (
    <ul className={styles.countryContainer}>
      {props.map((e) => (
        <li key={e.countryName}>
          <Country img={e.primaryImageUrl} country={e.countryName} />
        </li>
      ))}
    </ul>
  );
};

export default Countries;

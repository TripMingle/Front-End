import { useCountryStore } from '@/store/countryStore';
import * as styles from '@/styles/main/country.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Country = ({ props }: { props: Country }) => {
  const router = useRouter();
  const setCountry = useCountryStore((state) => state.setCountry);
  const setCountryUrl = useCountryStore((state) => state.setCountryUrl);

  const clickHandler = (country: string, url: string) => {
    setCountry(country);
    setCountryUrl(url);
    router.push('/' + props.countryNameEnglish.toLowerCase());
  };

  return (
    <div
      className={styles.container}
      onClick={() => clickHandler(props.countryName, props.primaryImageUrl)}
    >
      <Image
        className={styles.bgImage}
        src={props.primaryImageUrl}
        fill
        sizes="160px"
        alt={props.countryNameEnglish}
      />
      <div className={styles.bgOverlay}></div>
      <span className={styles.name}>{props.countryName}</span>
    </div>
  );
};

const Countries = ({ props }: { props: Country[] }) => {
  return (
    <ul className={styles.countryContainer}>
      {props.map((e) => (
        <li key={e.countryName}>
          <Country props={e} />
        </li>
      ))}
    </ul>
  );
};

export default Countries;

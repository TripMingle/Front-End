import { useCountryStore } from '@/store/countryStore';
import * as styles from '@/styles/main/country.css';
import { formatCountryUrl } from '@/utils/country';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Country = ({ props }: { props: Country }) => {
  const router = useRouter();

  const clickHandler = (country: string) => {
    router.push('/' + country);
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.bgImage}
        src={props.primaryImageUrl}
        fill
        sizes="160px"
        alt={props.countryNameEnglish}
      />
      <div
        className={styles.bgOverlay}
        onClick={() => clickHandler(props.countryNameEnglish)}
      ></div>
      <span
        className={styles.name}
        onClick={() => clickHandler(props.countryNameEnglish)}
      >
        {props.countryName}
      </span>
    </div>
  );
};

const Countries = ({ props }: { props: Country[] }) => {
  return (
    <ul className={styles.countryContainer}>
      {props.map((e) => (
        <li key={e.countryNameEnglish}>
          <Country props={e} />
        </li>
      ))}
    </ul>
  );
};

export default Countries;

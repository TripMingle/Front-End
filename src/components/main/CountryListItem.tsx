import * as styles from '@/styles/main/country.css';
import { CountryType } from '@/types/main/country';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CountryListItem = ({ country }: { country: CountryType }) => {
  const router = useRouter();

  const clickHandler = (country: string) => {
    router.push('/' + country);
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.bgImage}
        src={country.primaryImageUrl}
        fill
        sizes="160px"
        alt={country.countryNameEnglish}
      />
      <div
        className={styles.bgOverlay}
        onClick={() => clickHandler(country.countryNameEnglish)}
      ></div>
      <span
        className={styles.name}
        onClick={() => clickHandler(country.countryNameEnglish)}
      >
        {country.countryName}
      </span>
    </div>
  );
};

export default CountryListItem;

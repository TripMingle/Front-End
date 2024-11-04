import { skeleton } from '@/styles/components/common/common.css';
import { countryContainer } from '@/styles/main/country.css';
import * as styles from '@/styles/main/country.css';

const CountryListSkeleton = () => {
  return (
    <ul className={countryContainer}>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <li key={index}>
            <div className={`${styles.container}`}>
              <div className={`${styles.bgimageSkeleton} ${skeleton}`} />
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CountryListSkeleton;

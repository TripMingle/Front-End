import * as styles from '@/styles/country/board/write/country-box.css';
import Image from 'next/image';

const CountryBox = ({
  name,
  nameKor,
  select,
}: {
  name: string;
  nameKor: string;
  select: string;
}) => {
  return (
    <div className={styles.countryContainer({ select: select === name })}>
      {nameKor}
      <span className={styles.iconContainer({ select: select === name })}>
        <Image
          className={styles.icon}
          src="/icons/w_check.svg"
          alt="checkIcon"
          width={14}
          height={12}
        />
      </span>
    </div>
  );
};

export default CountryBox;

'use client';
import Image from 'next/image';
import * as styles from '@/styles/components/common/countryWrite.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCountryStore } from '@/store/countryStore';
import { formatCountryUrl } from '@/utils/country';

const CountryWrite = () => {
  const [active, setActive] = useState<boolean>(false);
  const country = useCountryStore((state) => state.country);
  const router = useRouter();

  const clickHandler = (type: string) => {
    if (country) {
      router.push(`/${formatCountryUrl(country)}/${type}/write`);
    }
  };

  return (
    <div className={styles.countryWriteContainer}>
      <div className={styles.writeItemContainer}>
        <div
          className={styles.writeContainer({ active: active, type: 'board' })}
          onClick={() => clickHandler('board')}
        >
          동행글
        </div>
        <div
          className={styles.writeContainer({ active: active, type: 'post' })}
          onClick={() => clickHandler('post')}
        >
          정보글
        </div>
        <div
          onClick={() => setActive(!active)}
          className={styles.iconContainer}
        >
          <Image
            className={styles.icon}
            src="/icons/pencil.svg"
            alt="writeIcon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <p className={styles.writeText}>등록하기</p>
    </div>
  );
};

export default CountryWrite;

import * as styles from '@/styles/country/board/write/secondstep/people-count-box.css';
import Image from 'next/image';
import { useState } from 'react';

const PeopleCountBox = () => {
  const [count, setCount] = useState<number>();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(event.target.value));
  };

  return (
    <div className={styles.container}>
      <Image src="/icons/user.svg" width={20} height={20} alt="peopleIcon" />
      <input
        className={styles.input}
        type="number"
        value={count}
        onChange={changeHandler}
      />
      <span>명</span>
    </div>
  );
};

export default PeopleCountBox;

import * as styles from '@/styles/country/board/write/secondstep/people-count-box.css';
import Image from 'next/image';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';

const PeopleCountBox = () => {
  const { register } = useFormContext<BoardForm>();

  return (
    <div className={styles.container}>
      <Image src="/icons/user.svg" width={20} height={20} alt="peopleIcon" />
      <input
        className={styles.input}
        type="number"
        {...register('maxCount', { valueAsNumber: true })}
      />
      <span>명</span>
    </div>
  );
};

export default PeopleCountBox;

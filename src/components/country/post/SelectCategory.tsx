'use client';

import Good from '@/components/country/Icons/Good';
import House from '@/components/country/Icons/House';
import Calendar from '@/components/country/Icons/Calendar';
import { ChangeEvent, useEffect, useState } from 'react';
import * as styles from '@/styles/country/post/select-category.css';
import { usePostStore } from '@/store/postStore';

const SelectCateogry = ({
  categoryHandler,
}: {
  categoryHandler: (category: string) => void;
}) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    categoryHandler(event.target.value);
  };
  const category = usePostStore((state) => state.category);

  return (
    <div className={styles.categoryContainer}>
      <input
        className={styles.inputContainer}
        type="radio"
        id="RESTAURANT"
        value="RESTAURANT"
        checked={category === 'RESTAURANT'}
        onChange={changeHandler}
      />
      <label
        className={styles.labelContainer({
          select: category === 'RESTAURANT',
        })}
        htmlFor="RESTAURANT"
      >
        <Good className={styles.icon} width={28} height={28} />
        {'맛집'}
      </label>
      <input
        className={styles.inputContainer}
        type="radio"
        id="RENTAL_HOME"
        value="RENTAL_HOME"
        checked={category === 'RENTAL_HOME'}
        onChange={changeHandler}
      />
      <label
        className={styles.labelContainer({
          select: category === 'RENTAL_HOME',
        })}
        htmlFor="RENTAL_HOME"
      >
        <House className={styles.icon} width={28} height={28} />
        {'숙소'}
      </label>
      <input
        className={styles.inputContainer}
        type="radio"
        id="SCHEDULE"
        value="SCHEDULE"
        checked={category === 'SCHEDULE'}
        onChange={changeHandler}
      />
      <label
        className={styles.labelContainer({
          select: category === 'SCHEDULE',
        })}
        htmlFor="SCHEDULE"
      >
        <Calendar className={styles.icon} width={28} height={28} />
        {'일정'}
      </label>
    </div>
  );
};

export default SelectCateogry;

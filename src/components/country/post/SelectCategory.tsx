'use client';

import Good from '@/components/country/Icons/Good';
import House from '@/components/country/Icons/House';
import Calendar from '@/components/country/Icons/Calendar';
import { ChangeEvent, useState } from 'react';

const SelectCateogry = ({ category }: { category: string }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(category);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div>
      <input
        type="radio"
        id="food"
        value="food"
        checked={selectedCategory === 'food'}
        onChange={changeHandler}
      />
      <label htmlFor="food">
        <Good width={28} height={28} />
      </label>
      <input
        type="radio"
        id="house"
        value="house"
        checked={selectedCategory === 'house'}
        onChange={changeHandler}
      />
      <label htmlFor="house">
        <House width={28} height={28} />
      </label>
      <input
        type="radio"
        id="schedule"
        value="schedule"
        checked={selectedCategory === 'schedule'}
        onChange={changeHandler}
      />
      <label htmlFor="schedule">
        <Calendar width={28} height={28} />
      </label>
    </div>
  );
};

export default SelectCateogry;

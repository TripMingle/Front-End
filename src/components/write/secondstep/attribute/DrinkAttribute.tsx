import Image from 'next/image';
import { ChangeEvent } from 'react';
import * as styles from '@/styles/write/secondstep/attribute-box.css';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';
import DrinkIcon from '@/components/common/icons/DrinkIcon';

const DrinkAttribute = () => {
  const { watch, setValue } = useFormContext<BoardForm>();

  const value = watch('preferDrink');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('preferDrink', Number(event.target.value));
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <DrinkIcon width={36} height={36} color={'#3688ff'} />
        <span>음주</span>
      </div>
      <ul className={styles.radioContainer}>
        {explain.map((element, index) => (
          <li key={'drink' + element.text}>
            <input
              className={styles.input}
              type="radio"
              id={'drink' + element.text}
              value={element.value}
              checked={element.value === value}
              onChange={changeHandler}
            />
            <label
              className={styles.radioGroup}
              htmlFor={'drink' + element.text}
            >
              <Image
                className={styles.check({ select: element.value === value })}
                src={'/icons/w_check.svg'}
                alt="checkIcon"
                width={16}
                height={16}
              />
              {element.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const explain = [
  { text: '음주비선호', value: 1 },
  { text: '상관없음', value: 3 },
  { text: '음주선호', value: 5 },
];

export default DrinkAttribute;

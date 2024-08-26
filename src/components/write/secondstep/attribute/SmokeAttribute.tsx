import Image from 'next/image';
import { ChangeEvent } from 'react';
import * as styles from '@/styles/write/secondstep/attribute-box.css';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';
import SmokeIcon from '@/components/common/icons/SmokeIcon';

const SmokeAttribute = () => {
  const { watch, setValue } = useFormContext<BoardForm>();

  const value = watch('preferSmoking');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('preferSmoking', Number(event.target.value));
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <SmokeIcon width={36} height={36} color={'#3688ff'} />
        <span>흡연</span>
      </div>
      <ul className={styles.radioContainer}>
        {explain.map((element, index) => (
          <li key={'smoke' + element.text}>
            <input
              className={styles.input}
              type="radio"
              id={'smoke' + element.text}
              value={element.value}
              checked={element.value === value}
              onChange={changeHandler}
            />
            <label
              className={styles.radioGroup}
              htmlFor={'smoke' + element.text}
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
  { text: '비흡연자선호', value: 1 },
  { text: '상관없음', value: 3 },
  { text: '흡연자선호 ', value: 5 },
];

export default SmokeAttribute;

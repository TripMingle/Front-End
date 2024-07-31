import Image from 'next/image';
import { ChangeEvent } from 'react';
import * as styles from '@/styles/country/board/write/secondstep/attribute-box.css';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';
import CoupleIcon from '@/components/common/icons/CoupleIcon';

const GenderAttribute = () => {
  const { watch, setValue } = useFormContext<BoardForm>();

  const value = watch('preferGender');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('preferGender', Number(event.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <CoupleIcon width={36} height={36} color={'#3688ff'} />
        <span>성별</span>
      </div>
      <ul className={styles.radioContainer}>
        {explain.map((element, index) => (
          <li key={'gender' + element.text}>
            <input
              className={styles.input}
              type="radio"
              id={'gender' + element.text}
              value={element.value}
              checked={element.value === value}
              onChange={changeHandler}
            />
            <label
              className={styles.radioGroup}
              htmlFor={'gender' + element.text}
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
  { text: '남자선호', value: 1 },
  { text: '상관없음', value: 3 },
  { text: '여자선호', value: 5 },
];

export default GenderAttribute;

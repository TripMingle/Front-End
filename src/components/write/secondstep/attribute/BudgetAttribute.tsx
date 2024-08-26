import Image from 'next/image';
import { ChangeEvent } from 'react';
import * as styles from '@/styles/write/secondstep/attribute-box.css';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';

import WalletIcon from '@/components/common/icons/WalletIcon';

const BudgetAttribute = () => {
  const { watch, setValue } = useFormContext<BoardForm>();
  const value = watch('preferBudget');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue('preferBudget', Number(event.target.value));
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <WalletIcon width={36} height={36} color={'#3688ff'} />
        <span>예산</span>
      </div>
      <ul className={styles.radioContainer}>
        {explain.map((element, index) => (
          <li key={'budget' + element.text}>
            <input
              className={styles.input}
              type="radio"
              id={'budget' + element.text}
              value={element.value}
              checked={element.value === value}
              onChange={changeHandler}
            />
            <label
              className={styles.radioGroup}
              htmlFor={'budget' + element.text}
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
  { text: '가성비선호', value: 1 },
  { text: '상관없음', value: 3 },
  { text: '여유있음', value: 5 },
];

export default BudgetAttribute;

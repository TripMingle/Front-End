import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import * as styles from '@/styles/country/board/write/secondstep/attribute-box.css';
import PhotoIcon from '@/components/common/icons/PhotoIcon';

const PhotoAttribute = () => {
  const [value, setValue] = useState<number>(3);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <PhotoIcon width={36} height={36} color={'#3688ff'} />
        <span>사진</span>
      </div>
      <ul className={styles.radioContainer}>
        {explain.map((element, index) => (
          <li key={'photo' + element.text}>
            <input
              className={styles.input}
              type="radio"
              id={'photo' + element.text}
              value={element.value}
              checked={element.value === value}
              onChange={changeHandler}
            />
            <label
              className={styles.radioGroup}
              htmlFor={'photo' + element.text}
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
  { text: '사진비선호', value: 1 },
  { text: '상관없음', value: 3 },
  { text: '사진선호', value: 5 },
];

export default PhotoAttribute;

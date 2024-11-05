import Image from 'next/image';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import * as styles from '@/styles/write/secondstep/language-box.css';
import { PostForm } from '@/types/country/post';

const PostingTypeInput = () => {
  const { setValue, watch } = useFormContext<PostForm>();
  const postingType = watch('postingType');
  const [label, setLabel] = useState<string>(
    postingType ? Labels[postingType] : '',
  );
  const [showTypes, setShowTypes] = useState<boolean>(false);

  const clickHandler = (
    type: 'RESTAURANT' | 'RENTAL_HOME' | 'SCHEDULE',
    label: string,
  ) => {
    setValue('postingType', type);
    setLabel(label);
  };

  return (
    <div
      className={styles.container({ show: showTypes })}
      onClick={() => setShowTypes(!showTypes)}
    >
      <div className={styles.explainContainer}>
        <span className={styles.explain({ select: postingType != '' })}>
          {postingType == '' ? '카테고리를 선택해 주세요.' : label}
        </span>
        <Image
          className={styles.dropIcon({ show: showTypes })}
          src="/icons/drop_arrow.svg"
          alt="dropDownIcon"
          width={24}
          height={24}
        />
      </div>
      {showTypes ? (
        <ul className={styles.languageListContainer}>
          {PostingTypes.map((p) => (
            <li
              className={styles.languageContainer({
                select: p.type === postingType,
              })}
              key={p.type}
              onClick={() => clickHandler(p.type, p.label)}
            >
              <span className={styles.language}>{p.label}</span>
              <Image
                className={styles.checkIcon({
                  select: p.type == postingType,
                })}
                src="/icons/blue_check.svg"
                alt="checkIcon"
                width={24}
                height={24}
              />
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

const PostingTypes: {
  type: 'RESTAURANT' | 'RENTAL_HOME' | 'SCHEDULE';
  label: string;
}[] = [
  { type: 'RESTAURANT', label: '맛집' },
  { type: 'RENTAL_HOME', label: '숙소' },
  { type: 'SCHEDULE', label: '일정' },
];

const Labels = {
  RESTAURANT: '맛집',
  RENTAL_HOME: '숙소',
  SCHEDULE: '일정',
};
export default PostingTypeInput;

'use client';
import * as styles from '@/styles/components/common/board-card.css';
import Image from 'next/image';
import { useState } from 'react';

const BookMark = ({ isMarked }: { isMarked: Boolean }) => {
  const [marked, setMarked] = useState(isMarked);

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setMarked(!marked);
  };

  return (
    <div className={styles.bookMarkContainer} onClick={clickHandler}>
      {marked ? (
        <Image
          className={styles.bookMark}
          src="/icons/fill_star.svg"
          alt="marked"
          width={16}
          height={16}
        />
      ) : (
        <Image
          className={styles.bookMark}
          src="/icons/star.png"
          alt="unmarked"
          width={16}
          height={16}
        />
      )}
    </div>
  );
};

export default BookMark;

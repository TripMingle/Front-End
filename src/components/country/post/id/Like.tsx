'use client';

import { icon, iconContainer } from '@/styles/country/board/id/page.css';
import Image from 'next/image';
import { useState } from 'react';

const Like = ({
  isLike,
  likeCount,
}: {
  isLike: boolean;
  likeCount: number;
}) => {
  const [like, setLike] = useState<boolean>(isLike);
  const [count, setCount] = useState<number>(likeCount);

  const clickHandler = () => {
    if (like) {
      setCount((prev) => prev - 1);
      setLike(false);
    } else {
      setCount((prev) => prev + 1);
      setLike(true);
    }
  };

  return (
    <span className={iconContainer}>
      <Image
        className={icon}
        src={`/icons/${like ? 'full_heart' : 'empty_heart'}.svg`}
        width={20}
        height={20}
        alt="likeIcon"
        onClick={clickHandler}
      />
      <span>{count}</span>
    </span>
  );
};

export default Like;

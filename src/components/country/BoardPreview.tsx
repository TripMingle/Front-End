'use client';

import * as styles from '@/styles/country/page.css';
import Person from './Icons/Person';
import More from '../common/More';
import BoardCard from '../common/BoardCard';
import { getBoardPreview } from '@/api/board';
import { useEffect, useState } from 'react';
import { BoardPreviewProps } from '@/types/country/board';
import { EmptyBoard } from './EmptyBoard';
import { usePathname } from 'next/navigation';
import { getCountryName } from '@/utils/country';

const BoardPreview = () => {
  const pathname = usePathname();
  const [country, setCountry] = useState<string>('');
  const [boardPreview, setBoardPreview] = useState<BoardPreviewProps[]>([]);

  const getBoardPreviewList = async () => {
    if (country) {
      const data = await getBoardPreview(country);
      setBoardPreview(data.data);
    }
  };

  useEffect(() => {
    setCountry(getCountryName(pathname));
  }, []);

  useEffect(() => {
    getBoardPreviewList();
  }, [country]);

  return (
    <div className={styles.categoryContainer}>
      <Person className={styles.icon} width={36} height={36} />
      <span className={styles.category}>여행 동행글</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>
          전 세계 친구들과 자유롭게 동행해 보세요!
        </span>
        <More path="/board" category="" />
      </div>
      {boardPreview.length ? (
        <ul className={styles.boardContainer}>
          {boardPreview.map((board) => (
            <li key={board.boardId}>
              <BoardCard props={board} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyBoard />
      )}
    </div>
  );
};

export default BoardPreview;

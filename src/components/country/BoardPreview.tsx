'use client';

import * as styles from '@/styles/country/page.css';
import Person from './Icons/Person';
import More from '../common/More';
import BoardCard from '../common/BoardCard';
import { getBoardPreview } from '@/api/getBoard';
import { useEffect, useState } from 'react';
import { useCountryStore } from '@/store/countryStore';
import { BoardPreviewProps } from '@/types/country/board';
import { EmptyBoardPreview } from './EmptyBoard';

const BoardPreview = () => {
  const continent = useCountryStore((state) => state.country);
  const [boardPreview, setBoardPreview] = useState<BoardPreviewProps[]>([]);

  const getBoardPreviewList = async () => {
    if (continent) {
      const data = await getBoardPreview(continent);
      console.log(data.data);
      setBoardPreview(data.data);
    }
  };

  useEffect(() => {
    getBoardPreviewList();
  }, [continent]);

  return (
    <div className={styles.categoryContainer}>
      <Person className={styles.icon} width={36} height={36} />
      <span className={styles.category}>여행 동행글</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>
          전 세계 친구들과 자유롭게 동행해 보세요!
        </span>
        <More path="/board" />
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
        <EmptyBoardPreview />
      )}
    </div>
  );
};

export default BoardPreview;

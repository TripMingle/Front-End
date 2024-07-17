'use client';

import * as styles from '@/styles/country/page.css';
import BoardCard from '@/components/common/BoardCard';
import { getBoard } from '@/api/getBoard';
import { useEffect, useState } from 'react';
import { useCountryStore } from '@/store/countryStore';
import { BoardPreviewProps } from '@/types/country/user';

const BoardList = () => {
  const continent = useCountryStore((state) => state.country);
  const [boardList, setBoardList] = useState<BoardPreviewProps[]>([]);
  const [page, setPage] = useState<number>(0);

  const getBoardList = async () => {
    if (continent) {
      const data = await getBoard(continent, page);
      console.log(data.data);
      setBoardList(data.data.content);
    }
  };

  useEffect(() => {
    getBoardList();
  }, [continent, page]);

  return (
    <ul className={styles.boardContainer}>
      {boardList.map((board) => (
        <li key={board.boardId}>
          <BoardCard props={board} />
        </li>
      ))}
    </ul>
  );
};

export default BoardList;

'use client';

import * as board from '@/styles/country/board/page.css';
import * as styles from '@/styles/country/page.css';
import BoardCard from '@/components/common/BoardCard';
import { getBoard } from '@/api/getBoard';
import { useEffect, useState } from 'react';
import { useCountryStore } from '@/store/countryStore';
import { BoardPreviewProps } from '@/types/country/board';
import Pagination from '@/components/common/Pagination';
import { EmptyBoardPreview } from '../EmptyBoard';

const BoardList = () => {
  const continent = useCountryStore((state) => state.country);
  const [boardList, setBoardList] = useState<BoardPreviewProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalBoard, setTotalBoard] = useState<number>(0);

  const getBoardList = async () => {
    if (continent) {
      const data = await getBoard(continent, page);
      setTotalPage(data.data.totalPages);
      setTotalBoard(data.data.totalElements);
      setBoardList(data.data.content);
    }
  };

  const pageMove = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    getBoardList();
  }, [continent, page]);

  return (
    <div>
      <div className={board.plain}>
        <span className={board.highlight}>{totalBoard}</span>
        <span>
          개의 동행이
          <br />
          기다리고 있어요!
        </span>
      </div>
      {boardList.length ? (
        <div>
          <ul className={styles.boardContainer}>
            {boardList.map((board) => (
              <li key={board.boardId}>
                <BoardCard props={board} />
              </li>
            ))}
          </ul>
          <Pagination
            current={page}
            total={totalPage}
            clickHandler={pageMove}
          />
        </div>
      ) : (
        <EmptyBoardPreview />
      )}
    </div>
  );
};

export default BoardList;

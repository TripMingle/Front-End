'use client';

import * as board from '@/styles/country/board/page.css';
import * as styles from '@/styles/country/page.css';
import BoardCard from '@/components/common/BoardCard';
import { getBoardList } from '@/api/board';
import { useEffect, useState } from 'react';
import { BoardPreviewProps } from '@/types/country/board';
import Pagination from '@/components/common/Pagination';
import { EmptyBoard } from '../EmptyBoard';
import { getCountryName } from '@/utils/client/country';
import { usePathname } from 'next/navigation';
import BoardPreviewSkeleton from '../BoardPreviewSkeleton';

const BoardList = () => {
  const pathname = usePathname();
  const [country, setCountry] = useState<string>('');
  const [boardList, setBoardList] = useState<BoardPreviewProps[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [totalBoard, setTotalBoard] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBoard = async () => {
    if (country) {
      const data = await getBoardList(country, page);
      setTotalPage(data.data.totalPages);
      setTotalBoard(data.data.totalElements);
      setBoardList(data.data.content);
      setIsLoading(false);
    }
  };

  const pageMove = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setCountry(getCountryName(pathname));
  }, []);

  useEffect(() => {
    getBoard();
  }, [country, page]);

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
      {isLoading ? (
        <BoardPreviewSkeleton />
      ) : boardList.length ? (
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
        <EmptyBoard />
      )}
    </div>
  );
};

export default BoardList;

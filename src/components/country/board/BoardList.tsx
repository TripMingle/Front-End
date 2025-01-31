import * as board from '@/styles/country/board/page.css';
import * as styles from '@/styles/country/page.css';
import { BoardPreviewProps } from '@/types/country/board';
import { Suspense } from 'react';
import BoardPreviewSkeleton from '../BoardPreviewSkeleton';
import BoardCard from '@/components/common/BoardCard';
import { EmptyBoard } from '../EmptyBoard';
import Pagination from '@/components/common/Pagination';

const BoardList = async ({
  country,
  page,
}: {
  country: string;
  page: string;
}) => {
  const res = await fetch(
    `${process.env.FRONT_URL}/api/board/list?country=${country}&page=${Number(page) - 1}`,
  );
  const data = await res.json();
  const boardList: BoardPreviewProps[] = data.data.content;
  const totalPage = data.data.totalPages;
  if (page > totalPage) page = totalPage;
  const totalBoard = data.data.totalElements;

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
      <Suspense fallback={<BoardPreviewSkeleton />}>
        {boardList.length ? (
          <ul className={styles.boardContainer}>
            {boardList.map((board) => (
              <li key={board.boardId}>
                <BoardCard country={country} props={board} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyBoard />
        )}
        {boardList.length && <Pagination current={page} total={totalPage} />}
      </Suspense>
    </div>
  );
};

export default BoardList;

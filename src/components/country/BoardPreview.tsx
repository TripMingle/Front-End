import * as styles from '@/styles/country/page.css';
import BoardCard from '../common/BoardCard';
import { EmptyBoard } from './EmptyBoard';
import { BoardPreviewProps } from '@/types/country/board';

const BoardPreview = async ({ country }: { country: string }) => {
  const res = await fetch(
    `${process.env.FRONT_URL}/api/board/preview?country=${country}`,
  );
  const data = await res.json();
  const boardPreview: BoardPreviewProps[] = data.data;

  return boardPreview.length ? (
    <ul className={styles.boardContainer}>
      {boardPreview.map((board) => (
        <li key={board.boardId}>
          <BoardCard country={country} props={board} />
        </li>
      ))}
    </ul>
  ) : (
    <EmptyBoard />
  );
};

export default BoardPreview;

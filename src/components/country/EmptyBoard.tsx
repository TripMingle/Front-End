import { emptyBoardContainer } from '@/styles/country/page.css';

export const EmptyBoard = () => {
  return (
    <div className={emptyBoardContainer}>
      아직 작성된 동행 게시글이 없습니다.
      <br /> 제일 먼저 작성해보세요!
    </div>
  );
};

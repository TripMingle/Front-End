import { emptyConatiner } from '@/styles/country/page.css';

export const EmptyBoardPreview = () => {
  return (
    <div className={emptyConatiner}>
      아직 작성된 동행 게시글이 없습니다.<br /> 제일 먼저 작성해보세요!
    </div>
  );
};

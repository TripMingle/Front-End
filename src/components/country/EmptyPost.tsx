import { emptyPostContainer } from '@/styles/country/page.css';

const EmptyPost = () => {
  return (
    <div className={emptyPostContainer}>
      아직 작성된 게시글이 없습니다.
      <br /> 제일 먼저 작성해보세요!
    </div>
  );
};

export default EmptyPost;

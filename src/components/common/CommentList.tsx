import { useBoardStore } from '@/store/boardStore';
import Comment from './Comment';
import { commentListContainer } from '@/styles/components/common/comment.css';

const CommentList = () => {
  const commentList = useBoardStore(
    (state) => state.boardDetail,
  ).boardCommentResDTOS;
  return (
    <ul className={commentListContainer}>
      {commentList.map((comment) => (
        <li key={comment.boardCommentId}>
          <Comment props={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentList;

import Comment from './Comment';
import { commentListContainer } from '@/styles/components/common/comment.css';
import { CommentType } from '@/types/country/board';

const CommentList = ({ comments }: { comments: CommentType[] }) => {
  return (
    <ul className={commentListContainer}>
      {comments.map((comment) => (
        <li key={comment.boardCommentId}>
          <Comment props={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentList;

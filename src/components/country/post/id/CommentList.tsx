import Comment from './Comment';
import { commentListContainer } from '@/styles/components/common/comment.css';
import { PostCommentType } from '@/types/country/post';

const CommentList = ({ comments }: { comments: PostCommentType[] }) => {
  return (
    <ul className={commentListContainer}>
      {comments.map((comment) => (
        <li key={comment.commentId}>
          <Comment props={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentList;

import Image from 'next/image';
import '@/styles/font.css';
import * as styles from '@/styles/country/board/id/page.css';
import TravelerCard from '@/components/country/board/id/TravelerCard';
import CommentInput from '@/components/common/CommentInput';
import CommentList from '@/components/country/post/id/CommentList';
import { headers } from 'next/headers';
import { PostDetailType } from '@/types/country/post';
import Like from '@/components/country/post/id/Like';

const Page = async ({
  params,
}: {
  params: { country: string; id: string };
}) => {
  console.log(params);
  const headersList = headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

  const postData = await fetch(
    `${protocol}://${host}/api/post?postId=${params.id}`,
  ).then((res) => res.json());

  const postDetail: PostDetailType = postData.data;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <p className={styles.title}>{postDetail.title}</p>
          <div>
            <Like
              isLike={postDetail.myLikeState}
              likeCount={postDetail.likeCount}
            />
            <span className={styles.iconContainer}>
              <Image
                className={styles.icon}
                src="/icons/comment.svg"
                width={20}
                height={20}
                alt="commendIcon"
              />
              <span>{postDetail.commentCount}</span>
            </span>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoTitle}>내용</p>
            <div className={styles.infoContent}>{postDetail.content}</div>
          </div>
        </div>
        <TravelerCard
          props={{
            userImageUrl: postDetail.userImageUrl,
            nickName: postDetail.userNickName,
            userId: 0,
            ageRange: postDetail.userAgeRange,
            gender: postDetail.userGender,
            nationality: postDetail.userNationality,
            selfIntroduction: postDetail.selfIntroduce ?? '',
          }}
          title="작성자"
          type="post"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.commentContainer}>
          <p className={styles.commentTitle}>
            {'댓글 '}
            <strong className={styles.commentTitleStrong}>
              {postDetail.commentCount}
            </strong>
            {' 개'}
          </p>
          <CommentInput id={postDetail.postingId} type="post" />
          <CommentList comments={postDetail.postingComments} />
        </div>
      </div>
    </>
  );
};

export default Page;

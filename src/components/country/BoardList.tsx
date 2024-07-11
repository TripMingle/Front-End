import * as styles from '@/styles/country/page.css';
import Person from './Icons/Person';
import More from '../common/More';
import BoardCard from '../common/BoardCard';

const BoardList = () => {
  return (
    <div className={styles.categoryContainer}>
      <Person className={styles.icon} width={36} height={36} />
      <span className={styles.category}>여행 동행글</span>
      <div className={styles.textContainer}>
        <span className={styles.explain}>
          전 세계 친구들과 자유롭게 동행해 보세요!
        </span>
        <More path="/board" />
      </div>
      <div className={styles.boardContainer}>
        {/*country 페이지에서는 샘플 4개씩, 서버에서 4개만 받아서 보여줄 것*/}
        <Example />
        <Example />
        <Example />
        <Example />
      </div>
    </div>
  );
};

export default BoardList;


// TODO 서버 연동 시 지우기 
// 동행 게시물 샘플
const Example = () => {
  return (
    <BoardCard
      isMarked={false}
      language="japanese"
      title="파리에서 다이빙 할 사람"
      startDate="2024.06.13"
      endDate="2024.06.23"
      currentCount={3}
      maxCount={6}
      user={exmapleUser}
    />
  );
};

// 유저 정보 샘플
const exmapleUser = {
  url: '',
  name: '홍길동',
  age: 20,
  gender: false,
  nationality: '한국',
};

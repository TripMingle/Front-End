import '@/styles/font.css';
import TripMinglePostCard from '@/components/common/TripMinglePostCard';

export default function Page() {
  return (
    <main>
      <div>
        <TripMinglePostCard
          isMarked={false}
          language="japanese"
          title="오빠 바보 ㅋ"
          startDate="2024.06.13"
          endDate="2024.06.23"
          currentCount={3}
          maxCount={6}
          url=""
          name="홍길동"
          age={20}
          gender={false}
          nationality="한국"
        />
      </div>
    </main>
  );
}

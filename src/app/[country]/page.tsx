import '@/styles/font.css';
import TripMinglePostCard from '@/components/common/TripMinglePostCard';

export default function Page() {
  return (
    <main>
      <div>
        <TripMinglePostCard isMarked={false} />
      </div>
    </main>
  );
}

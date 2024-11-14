import MypageHeader from '@/components/mypage/MypageHeader';
import { pageContainer } from '@/styles/country/page.css';
import { mypageContainer } from '@/styles/mypage/mypage-header.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={pageContainer}>
      <div className={mypageContainer}>
        <MypageHeader />
        <div>{children}</div>
      </div>
    </div>
  );
}

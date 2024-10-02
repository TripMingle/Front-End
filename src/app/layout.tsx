import Initializer from '@/components/common/Initializer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TripMingle',
  description:
    '글로벌 여행 동행 서비스 트립밍글에서 전 세계 사람들을 만나고, 여행 정보 공유하고, 여행 동행 추천도 받아보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content={metadata.description!} />
      </head>
      <body>
        <Initializer />
        {children}
      </body>
    </html>
  );
}

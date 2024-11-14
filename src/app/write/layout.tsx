import { pageContainer, pageContent } from '@/styles/write/page.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={pageContainer}>
      <div className={pageContent}>{children}</div>
    </div>
  );
}

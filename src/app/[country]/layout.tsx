import { pageContainer } from '@/styles/country/page.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={pageContainer}>{children}</div>;
}

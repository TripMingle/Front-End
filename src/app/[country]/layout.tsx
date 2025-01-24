import { pageContainer } from '@/styles/country/page.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={pageContainer}>{children}</div>;
}

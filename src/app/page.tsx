'use client';

import Navbar from '@/components/navbar/Navbar';
import '../styles/font.css';
import * as styles from './page.css';
import SearchBox from './searchBox';

export default function Home() {
  return (
    <main>
      <Navbar bg={false} />
      <div className={styles.bgContainer}>
        <img className={styles.bg} src="/mainbg.png" alt="mainBackground" />
        <SearchBox />
      </div>
    </main>
  );
}

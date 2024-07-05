import '@/styles/font.css';
import * as country from '@/styles/country/page.css';
import { WhiteHeader } from '@/components/header/Header';

export default function Page() {
  return (
    <main>
      <WhiteHeader />
      <div className={country.pageContainer}></div>
    </main>
  );
}

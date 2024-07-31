import '@/styles/font.css';
import NonProfileHeader from '@/components/header/NonProfileHeader';
import { pageContainer } from '@/styles/country/page.css';

const Page = () => {
  return (
    <>
      <NonProfileHeader />
      <div className={pageContainer}></div>
    </>
  );
};

export default Page;

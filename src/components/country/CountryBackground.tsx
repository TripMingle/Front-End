import Image from 'next/image';
import { image, imageContainer } from '@/styles/country/page.css';
import MoveToMain from './MoveToMain';
import { headers } from 'next/headers';

const CountryBackground = async ({ country }: { country: string }) => {
  const headersList = headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

  const response = await fetch(`${protocol}://${host}/api/country/${country}`);

  if (!response.ok) {
    throw new Error(`${country}에 대한 나라 정보를 찾을 수 없습니다.`);
  }

  const data = await response.json();

  console.log(data.data);

  return (
    <>
      <div className={imageContainer}>
        <Image
          className={image}
          src={data?.data.countryImageUrl || '/images/emptyBackground.png'}
          alt="countryBackgroundImage"
          fill
          sizes="100vw"
        />
      </div>
      <MoveToMain props={data?.data} />
    </>
  );
};

export default CountryBackground;

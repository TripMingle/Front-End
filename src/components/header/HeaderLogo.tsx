import { useCountryStore } from '@/store/countryStore';
import {
  logo,
  logoContainer,
  title,
} from '@/styles/components/header/header.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeaderLogo = ({ color = 'b_' }: { color?: string }) => {
  const router = useRouter();

  const { initialize } = useCountryStore();
  const clickHandler = () => {
    initialize();
    router.push('/');
  };

  return (
    <div className={logoContainer} onClick={clickHandler}>
      <Image
        className={logo}
        src={'/images/' + color + 'logo.png'}
        width={40}
        height={40}
        alt="logo"
      />
      <Image
        className={title}
        src={'/images/' + color + 'title.png'}
        width={180}
        height={20}
        alt="title"
      />
    </div>
  );
};

export default HeaderLogo;

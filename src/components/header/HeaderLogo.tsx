import {
  logo,
  logoContainer,
  title,
  title2,
} from '@/styles/components/header/header.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeaderLogo = ({ color = 'b_' }: { color?: string }) => {
  const router = useRouter();
  const clickHandler = () => {
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
      {/* <div className={title2({ theme: 'clear' })}>TripMingle</div> */}
    </div>
  );
};

export default HeaderLogo;

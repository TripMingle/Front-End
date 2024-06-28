import { vars } from '@/app/globalTheme.css';
import { FaCircleUser } from 'react-icons/fa6';
import * as styles from './Navbar.css';

const NavbarProfile = ({ url }: { url: string }) => {
  return (
    <>
      {url ? (
        <img src={url} alt="profile" className={styles.profile} />
      ) : (
        <img src="/icons/profile.svg" alt="profile" />
      )}
      <div className={styles.name}>닉네임</div>
      <div style={{ paddingRight: '40px' }}>님 안녕하세요!</div>
    </>
  );
};

export default NavbarProfile;

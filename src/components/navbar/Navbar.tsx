import { FaBars } from 'react-icons/fa6';
import * as styles from './Navbar.css';
import NavbarProfile from './NavbarProfile';
import { vars } from '@/app/globalTheme.css';
import { PiBellBold } from 'react-icons/pi';

const Navbar = ({ bg }: { bg: Boolean }) => {
  return (
    <div className={styles.fixedbar}>
      <div className={bg ? styles.whiteNavbar : styles.clearNavbar}>
        <div className={bg ? styles.primaryLogo : styles.whiteLogo}>
          TripMingle
        </div>
        <NavbarProfile url={''} />
        <img
          src={bg ? '/icons/b_alarm.svg' : '/icons/w_alaram.svg'}
          alt="alram"
          className={styles.icon}
        />
        <img
          src={bg ? '/icons/b_menu.svg' : '/icons/w_menu.svg'}
          alt="menu"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Navbar;

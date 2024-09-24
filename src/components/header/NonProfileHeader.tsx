import * as styles from '@/styles/components/header/header.css';
import HeaderLogo from './HeaderLogo';

const NonProfileHeader = () => {
  return (
    <div>
      <nav className={styles.fixedbar({ theme: 'white' })}>
        <div className={styles.navbar({ theme: 'white' })}>
          <HeaderLogo />
        </div>
      </nav>
    </div>
  );
};

export default NonProfileHeader;

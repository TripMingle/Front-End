import * as styles from '@/styles/components/header/header.css';

const NonProfileHeader = () => {
  return (
    <div>
      <nav className={styles.fixedbar({ theme: 'white' })}>
        <div className={styles.navbar({ theme: 'white' })}>
          <div className={styles.logo({ theme: 'white' })}>TripMingle</div>
        </div>
      </nav>
    </div>
  );
};

export default NonProfileHeader;

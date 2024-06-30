import * as styles from './Continent.css';

const Continent = ({
  img,
  continent,
  explain,
}: {
  img: string;
  continent: string;
  explain: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <img
        className={styles.bgImage}
        src={img}
        alt="continent"
      />
      <div className={styles.bgOverlay}></div>
      <div className={styles.textContainer}>
        <div className={styles.name}>{continent}</div>
        <div className={styles.explain}>{explain}</div>
      </div>
    </div>
  );
};

export default Continent;

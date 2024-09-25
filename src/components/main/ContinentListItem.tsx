import * as styles from '@/styles/main/continent.css';
import { ContinentType } from '@/types/country/continent';
import Image from 'next/image';

const ContinentListItem = ({
  continent,
  clickHandler,
}: {
  continent: ContinentType;
  clickHandler: (continent: string, continentKor: string) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          className={styles.circle}
          onClick={() =>
            clickHandler(continent.continent, continent.continentKor)
          }
        ></div>
        <Image
          className={styles.bgImage}
          src={continent.url}
          fill
          sizes="(max-width: 1023px) 160px, 240px"
          alt="continent"
        />
        <div
          className={styles.bgOverlay}
          onClick={() =>
            clickHandler(continent.continent, continent.continentKor)
          }
        ></div>
        <div
          className={styles.textContainer}
          onClick={() =>
            clickHandler(continent.continent, continent.continentKor)
          }
        >
          <span className={styles.name}>{continent.continentKor}</span>
          <span className={styles.explain}>{continent.explain}</span>
        </div>
      </div>
    </div>
  );
};

export default ContinentListItem;

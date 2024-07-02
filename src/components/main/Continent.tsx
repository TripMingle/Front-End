import * as styles from '@/styles/main/continent.css';
import Image from 'next/image';

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
      <Image
        className={styles.bgImage}
        src={img}
        layout="fill"
        objectFit="cover"
        alt="continent"
      />
      <div className={styles.bgOverlay}></div>
      <div className={styles.textContainer}>
        <span className={styles.name}>{continent}</span>
        <span className={styles.explain}>{explain}</span>
      </div>
    </div>
  );
};

const Continents = ({
  clickHandler,
}: {
  clickHandler: (continent: string) => void;
}) => {
  return (
    <div className={styles.continentContainer}>
      <div onClick={() => clickHandler('asia')}>
        <Continent
          img="/images/continent/asiaBg.png"
          continent="아시아"
          explain="아는 만큼 보이는 매력"
        />
      </div>
      <div onClick={() => clickHandler('europe')}>
        <Continent
          img="/images/continent/europeBg.png"
          continent="유럽"
          explain="상상 속 유럽 여행을 현실로"
        />
      </div>
      <div onClick={() => clickHandler('oceania')}>
        <Continent
          img="/images/continent/oceaniaBg.png"
          continent="오세아니아"
          explain="수중낙원부터 만년설까지"
        />
      </div>
      <div onClick={() => clickHandler('southAmerica')}>
        <Continent
          img="/images/continent/southAmericBg.png"
          continent="남아메리카"
          explain="숨겨놓은 신비로움이 한가득!"
        />
      </div>
      <div onClick={() => clickHandler('northAmerica')}>
        <Continent
          img="/images/continent/northAmericBg.png"
          continent="북아메리카"
          explain="너는 어디까지 가봤니?"
        />
      </div>
      <div onClick={() => clickHandler('africa')}>
        <Continent
          img="/images/continent/africaBg.png"
          continent="아프리카"
          explain="나의 첫 아프리카 여행"
        />
      </div>
    </div>
  );
};

export default Continents;

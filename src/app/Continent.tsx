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
      <img className={styles.bgImage} src={img} alt="continent" />
      <div className={styles.bgOverlay}></div>
      <div className={styles.textContainer}>
        <div className={styles.name}>{continent}</div>
        <div className={styles.explain}>{explain}</div>
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
          img="/continent/asiaBg.png"
          continent="아시아"
          explain="아는 만큼 보이는 매력"
        />
      </div>
      <div onClick={() => clickHandler('europe')}>
        <Continent
          img="/continent/europeBg.png"
          continent="유럽"
          explain="상상 속 유럽 여행을 현실로"
        />
      </div>
      <div onClick={() => clickHandler('oceania')}>
        <Continent
          img="/continent/oceaniaBg.png"
          continent="오세아니아"
          explain="수중낙원부터 만년설까지"
        />
      </div>
      <div onClick={() => clickHandler('southAmerica')}>
        <Continent
          img="/continent/southAmericBg.png"
          continent="남아메리카"
          explain="숨겨놓은 신비로움이 한가득!"
        />
      </div>
      <div onClick={() => clickHandler('northAmerica')}>
        <Continent
          img="/continent/northAmericBg.png"
          continent="북아메리카"
          explain="너는 어디까지 가봤니?"
        />
      </div>
      <div onClick={() => clickHandler('africa')}>
        <Continent
          img="/continent/africaBg.png"
          continent="아프리카"
          explain="나의 첫 아프리카 여행"
        />
      </div>
    </div>
  );
};

export default Continents;

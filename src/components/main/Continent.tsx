import * as styles from '@/styles/main/continent.css';
import Image from 'next/image';

type Props = {
  url: string;
  continent: string;
  continentKor: string;
  explain: string;
};

const Continent = ({
  props,
  clickHandler,
}: {
  props: Props;
  clickHandler: (continent: string, continentKor: string) => void;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div
          className={styles.circle}
          onClick={() => clickHandler(props.continent, props.continentKor)}
        ></div>
        <Image
          className={styles.bgImage}
          src={props.url}
          fill
          sizes="(max-width: 1023px) 160px, 240px"
          alt="continent"
        />
        <div
          className={styles.bgOverlay}
          onClick={() => clickHandler(props.continent, props.continentKor)}
        ></div>
        <div
          className={styles.textContainer}
          onClick={() => clickHandler(props.continent, props.continentKor)}
        >
          <span className={styles.name}>{props.continentKor}</span>
          <span className={styles.explain}>{props.explain}</span>
        </div>
      </div>
    </div>
  );
};

const continentsInfo: Props[] = [
  {
    url: '/images/continent/asiaBg.png',
    continent: 'Asia',
    continentKor: '아시아',
    explain: '아는 만큼 보이는 매력',
  },
  {
    url: '/images/continent/europeBg.png',
    continent: 'Europe',
    continentKor: '유럽',
    explain: '상상 속 유럽 여행을 현실로',
  },
  {
    url: '/images/continent/oceaniaBg.png',
    continent: 'Oceania',
    continentKor: '오세아니아',
    explain: '수중낙원부터 만년설까지',
  },
  {
    url: '/images/continent/southAmericBg.png',
    continent: 'South America',
    continentKor: '남아메리카',
    explain: '숨겨놓은 신비로움이 한가득!',
  },
  {
    url: '/images/continent/northAmericBg.png',
    continent: 'North America',
    continentKor: '북아메리카',
    explain: '너는 어디까지 가봤니?',
  },
  {
    url: '/images/continent/africaBg.png',
    continent: 'Africa',
    continentKor: '아프리카',
    explain: '나의 첫 아프리카 여행',
  },
];

const Continents = ({
  clickHandler,
}: {
  clickHandler: (continent: string, continentKor: string) => void;
}) => {
  return (
    <ul className={styles.continentContainer}>
      {continentsInfo.map((continent) => {
        return (
          <li key={continent.continent}>
            <Continent props={continent} clickHandler={clickHandler} />
          </li>
        );
      })}
    </ul>
  );
};

export default Continents;

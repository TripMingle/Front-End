import { CONTINENTS } from '@/constants/country';
import { continentContainer } from '@/styles/main/continent.css';
import ContinentListItem from './ContinentListItem';

const ContinentList = ({
  clickHandler,
}: {
  clickHandler: (continent: string, continentKor: string) => void;
}) => {
  return (
    <ul className={continentContainer}>
      {CONTINENTS.map((continent) => {
        return (
          <li key={continent.continent}>
            <ContinentListItem
              continent={continent}
              clickHandler={clickHandler}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContinentList;

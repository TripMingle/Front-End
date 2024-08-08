import { getCountryByKeyword } from '@/api/getCountryInfo';
import useModal from '@/hooks/useModal';
import * as styles from '@/styles/signup/country-search.css';
import Image from 'next/image';
import { useState } from 'react';

const CountrySearch = ({
  handler,
  closeModal,
}: {
  handler: (country: string[]) => void;
  closeModal: () => void;
}) => {
  const [input, setInput] = useState<string>('');
  const [select, setSelect] = useState<string[]>([]);
  const [countryList, setCountryList] = useState<Country[]>([]);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      searchHandler();
    }
  };

  const propagationHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const confirmHandler = () => {
    if (select[0]) {
      handler(select);
      closeModal();
    }
  };

  const searchHandler = async () => {
    if (input) {
      const data = await getCountryByKeyword(input);
      setCountryList(data.data);
    }
  };

  return (
    <div className={styles.background} onClick={closeModal}>
      <div className={styles.modalContainer} onClick={propagationHandler}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>나라 검색</span>
          <Image
            className={styles.closeIcon}
            src="/icons/close.svg"
            alt="closeChat"
            width={15}
            height={15}
            onClick={closeModal}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            value={input}
            placeholder="나라를 검색하세요."
            onChange={inputChangeHandler}
            onKeyDown={keyDownHandler}
          />
          <Image
            className={styles.searchIcon}
            src="/icons/b_search.svg"
            width={24}
            height={24}
            alt="search"
            onClick={searchHandler}
          />
        </div>
        <ul className={styles.countryContainer}>
          {countryList ? (
            countryList.map((country, index) => (
              <li
                className={styles.country({
                  select: country.countryNameEnglish === select[0],
                })}
                key={country.countryNameEnglish}
                onClick={() =>
                  setSelect([country.countryNameEnglish, country.countryName])
                }
              >
                {country.countryName}
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
        <button
          className={styles.button({ select: !!select[0] })}
          onClick={confirmHandler}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default CountrySearch;

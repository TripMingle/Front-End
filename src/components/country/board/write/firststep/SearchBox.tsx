import * as styles from '@/styles/country/board/write/firststep/search-box.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SearchBox = ({
  searchCountry,
  countrySearchHandler,
}: {
  searchCountry: string;
  countrySearchHandler: (search: string) => void;
}) => {
  const [search, setSearch] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      countrySearchHandler(search);
    }
  };

  useEffect(() => {
    if (searchCountry === '') {
      setSearch('');
    }
  }, [searchCountry]);

  return (
    <div className={styles.inputBox}>
      <input
        className={styles.input}
        type="text"
        placeholder="나라 검색하기"
        value={search}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
      <Image
        className={styles.searchIcon}
        src="/icons/b_search.svg"
        width={30}
        height={30}
        alt="search"
        onClick={() => countrySearchHandler(search)}
      />
    </div>
  );
};

export default SearchBox;

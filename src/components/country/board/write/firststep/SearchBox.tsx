import * as styles from '@/styles/country/board/write/firststep/search-box.css';
import Image from 'next/image';
import { useState } from 'react';

const SearchBox = ({
  searchHandler,
}: {
  searchHandler: (search: string) => void;
}) => {
  const [search, setSearch] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.inputBox}>
      <input
        className={styles.input}
        type="text"
        placeholder="나라 검색하기"
        value={search}
        onChange={changeHandler}
      />
      <Image
        className={styles.searchIcon}
        src="/icons/b_search.svg"
        width={30}
        height={30}
        alt="search"
        onClick={() => searchHandler(search)}
      />
    </div>
  );
};

export default SearchBox;

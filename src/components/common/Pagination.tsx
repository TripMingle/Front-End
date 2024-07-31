'use client';
import * as styles from '@/styles/components/common/pagination.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Pagination = ({
  current,
  total,
  clickHandler,
}: {
  current: number;
  total: number;
  clickHandler: (page: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState<number>(current);
  const [pageArray, setPageArray] = useState<number[]>([]);

  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(0);

  const arrowClickHandler = (isLeft: boolean) => {
    if (isLeft && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (!isLeft && currentPage < total - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const calculatePageIndex = () => {
    if (currentPage <= 1) {
      setStartIndex(0);
      setEndIndex(total > 5 ? 5 : total);
    } else if (currentPage === total - 2) {
      setStartIndex(currentPage - 3 > 0 ? currentPage - 3 : 0);
      setEndIndex(total);
    } else if (currentPage === total - 1) {
      setStartIndex(currentPage - 4 > 0 ? currentPage - 4 : 0);
      setEndIndex(total);
    } else {
      setStartIndex(currentPage - 2);
      setEndIndex(currentPage + 3);
    }
  };

  const pageClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    setCurrentPage(Number(event.currentTarget.textContent) - 1);
  };

  useEffect(() => {
    clickHandler(currentPage);
    calculatePageIndex();
  }, [currentPage]);

  useEffect(() => {
    setPageArray(
      Array(total)
        .fill(0)
        .map((e, i) => i),
    );
    calculatePageIndex();
  }, [total]);

  return (
    <div className={styles.container}>
      <Image
        className={styles.arrowButton}
        src="/icons/arrow_left.svg"
        width={18}
        height={18}
        alt="before_button"
        onClick={() => arrowClickHandler(true)}
      />
      <ul className={styles.pageContainer}>
        {pageArray.slice(startIndex, endIndex).map((page) => (
          <li
            key={page}
            className={styles.page({ select: currentPage === page })}
            onClick={pageClickHandler}
          >
            {page + 1}
          </li>
        ))}
      </ul>
      <Image
        className={styles.arrowButton}
        src="/icons/arrow_right.svg"
        width={18}
        height={18}
        alt="before_button"
        onClick={() => arrowClickHandler(false)}
      />
    </div>
  );
};

export default Pagination;

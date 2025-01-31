'use client';
import * as styles from '@/styles/components/common/pagination.css';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Pagination = ({ current, total }: { current: string; total: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [pageArray, setPageArray] = useState<number[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(0);

  const createPageURL = (pagenumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(pagenumber));
    return `${pathname}?${params.toString()}`;
  };

  const arrowClickHandler = (isLeft: boolean) => {
    const currentPage = Number(current);
    if (isLeft && currentPage > 1) {
      router.replace(createPageURL(currentPage - 1));
    } else if (!isLeft && currentPage < total) {
      router.replace(createPageURL(currentPage + 1));
    }
  };

  const calculatePageIndex = () => {
    const currentPage = Number(current);
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
    router.replace(createPageURL(Number(event.currentTarget.textContent) - 1));
  };

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
            className={styles.page({ select: Number(current) === page + 1 })}
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

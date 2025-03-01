// 나라 검색 방식을 모달->드롭다운으로 변경하면서 CountryBoxList를 사용하게됨.

// 'use client';
// import { getCountryByKeyword } from '@/api/country';
// import * as styles from '@/styles/signup/country-search.css';
// import { CountryType } from '@/types/main/country';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import ModalWrapper from '../common/ModalWrapper';

// const CountrySearch = ({
//   isOpen,
//   handler,
//   closeModal,
// }: {
//   isOpen: boolean;
//   handler: (country: string[]) => void;
//   closeModal: () => void;
// }) => {
//   const [input, setInput] = useState<string>('');
//   const [select, setSelect] = useState<string[]>([]);
//   const [countryList, setCountryList] = useState<CountryType[]>([]);

//   const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(event.target.value);
//   };

//   const confirmHandler = () => {
//     if (select[0]) {
//       handler(select);
//       closeModal();
//     }
//   };

//   const searchHandler = async () => {
//     if (input) {
//       const data = await getCountryByKeyword(input);
//       setCountryList(data.data);
//     }
//   };

//   return (
//     <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
//       <div className={styles.modalContainer}>
//         <div className={styles.titleContainer}>
//           <span className={styles.title}>나라 검색</span>
//           <Image
//             className={styles.closeIcon}
//             src="/icons/close.svg"
//             alt="closeChat"
//             width={15}
//             height={15}
//             onClick={closeModal}
//           />
//         </div>
//         <form
//           className={styles.inputContainer}
//           onSubmit={(e) => {
//             e.preventDefault();
//             searchHandler();
//           }}
//         >
//           <input
//             className={styles.input}
//             type="text"
//             value={input}
//             placeholder="나라를 검색하세요."
//             onChange={inputChangeHandler}
//           />
//           <Image
//             className={styles.searchIcon}
//             src="/icons/b_search.svg"
//             width={24}
//             height={24}
//             alt="search"
//             onClick={searchHandler}
//           />
//         </form>
//         <ul className={styles.countryContainer}>
//           {countryList ? (
//             countryList.map((country, index) => (
//               <li
//                 className={styles.country({
//                   select: country.countryNameEnglish === select[0],
//                 })}
//                 key={country.countryNameEnglish}
//                 onClick={() =>
//                   setSelect([country.countryNameEnglish, country.countryName])
//                 }
//               >
//                 {country.countryName}
//               </li>
//             ))
//           ) : (
//             <></>
//           )}
//         </ul>
//         <button
//           className={styles.button({ select: !!select[0] })}
//           onClick={confirmHandler}
//         >
//           확인
//         </button>
//       </div>
//     </ModalWrapper>
//   );
// };

// export default CountrySearch;

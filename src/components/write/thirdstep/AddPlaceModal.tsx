import ModalWrapper from '@/components/common/ModalWrapper';
import * as styles from '@/styles/write/thirdstep/add-place-modal.css';
import Image from 'next/image';
import { useState } from 'react';
import { SchedulePlaceType } from '@/types/country/place';
import PlaceResultItem from './PlaceResultItem';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const AddPlaceModal = ({ isOpen, closeModal }: Props) => {
  const [result, setResult] = useState<SchedulePlaceType[]>([
    {
      id: 1231,
      placeName: 'Golden Gate Bridge',
      pointX: 37.8199,
      pointY: -122.4783,
      googlePlaceId: 'ChIJiQHsW0mAhYARmWQwLt1iD9g',
    },
  ]);
  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <div className={styles.modalContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>장소 검색</p>
          <Image
            className={styles.closeIcon}
            src="/icons/close.svg"
            alt="closeModal"
            width={18}
            height={18}
            onClick={closeModal}
          />
        </div>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchText}
            type="text"
            placeholder="가고 싶은 장소를 검색해보세요!"
          />
          <Image
            className={styles.searchIcon}
            src="/icons/b_search.svg"
            alt="searchPlace"
            width={20}
            height={20}
          />
        </div>
        <ul className={styles.resultContainer}>
          {result.map((e) => (
            <PlaceResultItem place={e} />
          ))}
        </ul>
        <div className={styles.buttonContainer}>
          <button className={styles.button({ select: false })}>
            선택 완료
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddPlaceModal;

import ModalWrapper from '@/components/common/ModalWrapper';
import * as styles from '@/styles/write/thirdstep/add-place-modal.css';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { SchedulePlaceType } from '@/types/country/place';
import PlaceResultItem from './PlaceResultItem';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const AddPlaceModal = ({ isOpen, closeModal }: Props) => {
  const [result, setResult] = useState<SchedulePlaceType[]>([]);
  const [input, setInput] = useState<string>('');
  const inputRef = useRef(null);
  const emptyRef = useRef(null);

  const [placesService, setPlacesService] =
    useState<google.maps.places.PlacesService | null>(null);
  const [autocompleteService, setAutocompleteService] =
    useState<google.maps.places.AutocompleteService | null>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      clickHandler();
    }
  };

  const clickHandler = () => {
    if (autocompleteService && input) {
      setResult([]);
      autocompleteService.getPlacePredictions(
        { input, language: 'ko' },
        (predictions, status) => {
          predictions?.forEach((e) => {
            placesService?.getDetails(
              {
                placeId: e.place_id,
                language: 'ko',
                fields: [
                  'formatted_address',
                  'geometry',
                  'place_id',
                  'name',
                  'photos',
                ],
              },
              (placeResults, status) => {
                if (placeResults) {
                  const pointX = placeResults.geometry?.location?.lat() || 0;
                  const pointY = placeResults.geometry?.location?.lng() || 0;
                  const placeName = placeResults.name || '';
                  let imageUrl = '';
                  if (placeResults.photos) {
                    imageUrl = placeResults.photos[0].getUrl({
                      maxWidth: 64,
                      maxHeight: 64,
                    });
                  }
                  const googlePlaceId = placeResults.place_id || '';
                  const address = placeResults.formatted_address || '';
                  const result: SchedulePlaceType = {
                    id: generateRandomId(),
                    pointX,
                    pointY,
                    placeName,
                    imageUrl,
                    googlePlaceId,
                    address,
                  };
                  setResult((prev) => [...prev, result]);
                }
              },
            );
          });
        },
      );
    }
  };

  useEffect(() => {
    if (!inputRef.current || !emptyRef.current) return;

    const autoCompleteService = new google.maps.places.AutocompleteService();
    const placesService = new google.maps.places.PlacesService(
      emptyRef.current,
    );

    setAutocompleteService(autoCompleteService);
    setPlacesService(placesService);
  }, [inputRef.current]);

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
            ref={inputRef}
            value={input}
            onChange={changeHandler}
            onKeyDown={keyDownHandler}
          />
          <Image
            className={styles.searchIcon}
            src="/icons/b_search.svg"
            alt="searchPlace"
            width={20}
            height={20}
            onClick={clickHandler}
          />
        </div>
        <ul className={styles.resultContainer}>
          {result.map((e) => (
            <li key={e.id}>
              <PlaceResultItem place={e} />
            </li>
          ))}
        </ul>
        <div className={styles.buttonContainer}>
          <button className={styles.button({ select: false })}>
            선택 완료
          </button>
        </div>
        <div ref={emptyRef}></div>
      </div>
    </ModalWrapper>
  );
};

export default AddPlaceModal;

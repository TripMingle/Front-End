import ModalWrapper from '@/components/common/ModalWrapper';
import * as styles from '@/styles/write/thirdstep/add-place-modal.css';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SchedulePlaceType } from '@/types/country/place';
import PlaceResultItem from './PlaceResultItem';
import { generateRandomId } from '@/utils/random';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  addPlaceHandler: (placeList: SchedulePlaceType[]) => void;
};

const AddPlaceModal = ({ isOpen, closeModal, addPlaceHandler }: Props) => {
  const [result, setResult] = useState<SchedulePlaceType[]>([]);
  const [input, setInput] = useState<string>('');
  const [select, setSelect] = useState<number[]>([]);

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

  const closeHandler = () => {
    setInput('');
    setResult([]);
    setSelect([]);
    closeModal();
  };

  const addHandler = () => {
    if (select.length > 0) {
      const tmp: SchedulePlaceType[] = [];
      select.forEach((e) => {
        tmp.push(result[e]);
      });
      addPlaceHandler(tmp);
      closeHandler();
    }
  };

  const selectHandler = (index: number) => {
    setSelect((select) => {
      if (select.includes(index)) {
        return select.filter((i) => i !== index);
      } else {
        return [...select, index];
      }
    });
  };

  const clickHandler = useCallback(() => {
    if (autocompleteService && input) {
      const tempResults: SchedulePlaceType[] = []; // 지역변수로 결과 저장
      autocompleteService.getPlacePredictions(
        { input, language: 'ko' },
        (predictions, status) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK) return;

          if (predictions) {
            const promises = predictions.map(
              (prediction) =>
                new Promise<void>((resolve) => {
                  placesService?.getDetails(
                    {
                      placeId: prediction.place_id,
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
                      if (
                        status === google.maps.places.PlacesServiceStatus.OK &&
                        placeResults
                      ) {
                        const pointX =
                          placeResults.geometry?.location?.lat() || 0;
                        const pointY =
                          placeResults.geometry?.location?.lng() || 0;
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
                        const id = generateRandomId();
                        const result: SchedulePlaceType = {
                          id,
                          pointX,
                          pointY,
                          placeName,
                          imageUrl,
                          googlePlaceId,
                          address,
                        };
                        tempResults.push(result); // 지역변수에 결과 저장
                      }
                      resolve(); // Promise 완료
                    },
                  );
                }),
            );

            Promise.all(promises).then(() => {
              setResult(tempResults); // 모든 요청이 완료된 후에 상태 업데이트
            });
          }
        },
      );
    }
  }, [autocompleteService, input, placesService]);

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
    <ModalWrapper isOpen={isOpen} closeModal={closeHandler}>
      <div className={styles.modalContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>장소 검색</p>
          <Image
            className={styles.closeIcon}
            src="/icons/close.svg"
            alt="closeModal"
            width={18}
            height={18}
            onClick={closeHandler}
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
          {result.map((e, i) => (
            <li key={e.id} onClick={() => selectHandler(i)}>
              <PlaceResultItem place={e} index={i} select={select} />
            </li>
          ))}
        </ul>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button({ select: select.length > 0 })}
            onClick={addHandler}
          >
            선택 완료
          </button>
        </div>
        <div ref={emptyRef}></div>
      </div>
    </ModalWrapper>
  );
};

export default AddPlaceModal;

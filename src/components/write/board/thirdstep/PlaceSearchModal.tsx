import ModalWrapper from '@/components/common/ModalWrapper';
import * as styles from '@/styles/write/thirdstep/place-search-modal.css';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SchedulePlaceType } from '@/types/country/place';
import PlaceSearchResult from './PlaceSearchResult';
import { generateRandomId } from '@/utils/client/random';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  addPlaceHandler: (placeList: SchedulePlaceType[]) => void;
};

const PlaceSearchModal = ({ isOpen, closeModal, addPlaceHandler }: Props) => {
  const { watch } = useFormContext<BoardForm>();

  const country = watch('countryName');
  const [result, setResult] = useState<SchedulePlaceType[]>([]);
  const [input, setInput] = useState<string>('');
  const [select, setSelect] = useState<number[]>([]);

  const inputRef = useRef(null);
  const emptyRef = useRef(null);

  const [placesService, setPlacesService] =
    useState<google.maps.places.PlacesService | null>(null);

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

  const clickHandler = useCallback(async () => {
    if (input) {
      let request = {
        query: country + input,
        fields: ['formatted_address', 'geometry', 'name', 'place_id', 'photos'],
      };

      let searchResults: SchedulePlaceType[] = [];

      placesService?.textSearch(request, (results, status) => {
        console.log(results);
        if (results) {
          searchResults = results.map((e) => {
            let pointX = 0;
            let pointY = 0;
            if (e.geometry?.location) {
              pointX = e.geometry.location.lat();
              pointY = e.geometry.location.lng();
            }

            let imageUrl = '';
            if (e.photos)
              imageUrl = e.photos[0].getUrl({ maxHeight: 64, maxWidth: 64 });

            return {
              boardScheduleId: generateRandomId(),
              pointX,
              pointY,
              placeName: e.name || '',
              imageUrl,
              googlePlaceId: e.place_id || '',
              address: e.formatted_address || '',
            };
          });
          setResult(searchResults);
        }
      });
    }
  }, [input]);

  useEffect(() => {
    if (!inputRef.current || !emptyRef.current) return;

    const placesService = new google.maps.places.PlacesService(
      inputRef.current,
    );
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
            <li key={e.boardScheduleId} onClick={() => selectHandler(i)}>
              <PlaceSearchResult place={e} index={i} select={select} />
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

export default PlaceSearchModal;

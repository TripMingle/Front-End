'use client';
import { getBoardSchedule } from '@/api/board';
import ModalWrapper from '@/components/common/ModalWrapper';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import * as styles from '@/styles/country/board/id/schedule-modal.css';
import ScheduleMap from './ScheduleMap';
import { SchedulePlaceIdType, SchedulePlaceType } from '@/types/country/place';
import { getDateInRange } from '@/utils/client/date';
import ScheduleList from './ScheduleList';

const ScheduleModal = ({
  boardId,
  startDate,
  endDate,
  country,
  isOpen,
  closeModal,
}: {
  boardId: number;
  startDate: string;
  endDate: string;
  country: string;
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [placeList, setPlaceList] = useState<{
    [key: string]: SchedulePlaceType[];
  }>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const dateArray = useMemo(() => {
    return getDateInRange(startDate, endDate);
  }, [startDate, endDate]);

  const [mapCenterDate, setMapCenterDate] = useState<string>(startDate);
  const [mapCenterIndex, setMapCenterIndex] = useState<number>(-1);

  const mapHandler = (date: string, index: number) => {
    setMapCenterDate(date);
    setMapCenterIndex(index);
  };

  useEffect(() => {
    const getSchedule = async () => {
      const tmp: { [key: string]: SchedulePlaceType[] } = {};
      dateArray.forEach((e) => (tmp[e] = []));
      const data = await getBoardSchedule(boardId);
      if (data) {
        data.data.boardScheduleResDTOList.forEach((e: SchedulePlaceIdType) =>
          tmp[e.date].push({
            boardScheduleId: e.boardScheduleId,
            googlePlaceId: e.googlePlaceId,
            placeName: e.placeName,
            pointX: e.pointX,
            pointY: e.pointY,
            imageUrl: '',
            address: '',
          }),
        );
      }
      setPlaceList(tmp);
      setIsLoading(false);
    };
    getSchedule();
  }, []);

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <button className={styles.closeButton} onClick={closeModal}>
        X
      </button>
      <div className={styles.contentContainer}>
        <p className={styles.title}>여행 일정</p>
        <div className={styles.infoContainer}>
          <Image
            className={styles.icon}
            src="/icons/color_calendar.png"
            width={18}
            height={18}
            alt="calendarIcon"
          />
          <span className={styles.date}>
            {startDate} ~ {endDate}
          </span>
        </div>
        <ScheduleMap
          placeList={placeList}
          index={mapCenterIndex}
          date={mapCenterDate}
          country={country}
        />
        {!isLoading && (
          <div className={styles.scheduleContainer}>
            <ScheduleList
              placeList={placeList}
              mapHandler={mapHandler}
              dateArray={dateArray}
            />
          </div>
        )}
      </div>
    </ModalWrapper>
  );
};

export default ScheduleModal;

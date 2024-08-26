'use client';
import * as styles from '@/styles/components/common/trip-type-box.css';
import { useState } from 'react';
import BedIcon from './icons/BedIcon';
import FoodIcon from './icons/FoodIcon';
import MountainIcon from './icons/MountainIcon';
import ClubIcon from './icons/ClubIcon';
import CarIcon from './icons/CarIcon';
import SimpleIcon from './icons/SimpleIcon';

export const TripTypeButton = ({
  isButton,
  isSelected,
  type,
}: {
  isButton: boolean;
  isSelected: boolean;
  type: string;
}) => {
  if (type === 'food') {
    return <FoodType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'bed') {
    return <BedType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'activity') {
    return <ActivityType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'simple') {
    return <SimpleType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'club') {
    return <ClubType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'car') {
    return <CarType isButton={isButton} isSelected={isSelected} />;
  }
};

export const SimpleType = ({
  isButton,
  isSelected,
  selectHandler,
}: {
  isButton: boolean;
  isSelected: boolean;
  selectHandler?: (type: string) => void;
}) => {
  const clickHandler = () => {
    if (selectHandler && isButton) selectHandler('simple');
  };

  return (
    <div
      className={styles.typeContainer({ select: isSelected })}
      onClick={clickHandler}
    >
      <SimpleIcon
        className={styles.icon}
        width={19}
        height={19}
        color={isSelected ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select: isSelected })}>단순 동행</span>
    </div>
  );
};

export const BedType = ({
  isButton,
  isSelected,
  selectHandler,
}: {
  isButton: boolean;
  isSelected: boolean;
  selectHandler?: (type: string) => void;
}) => {
  const clickHandler = () => {
    if (selectHandler && isButton) selectHandler('bed');
  };

  return (
    <div
      className={styles.typeContainer({ select: isSelected })}
      onClick={clickHandler}
    >
      <BedIcon
        className={styles.icon}
        width={19}
        height={19}
        color={isSelected ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select: isSelected })}>숙소 동행</span>
    </div>
  );
};

export const FoodType = ({
  isButton,
  isSelected,
  selectHandler,
}: {
  isButton: boolean;
  isSelected: boolean;
  selectHandler?: (type: string) => void;
}) => {
  const clickHandler = () => {
    if (selectHandler && isButton) selectHandler('food');
  };

  return (
    <div
      className={styles.typeContainer({ select: isSelected })}
      onClick={clickHandler}
    >
      <FoodIcon
        className={styles.icon}
        width={19}
        height={19}
        color={isSelected ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select: isSelected })}>식사 동행</span>
    </div>
  );
};

export const ActivityType = ({
  isButton,
  isSelected,
  selectHandler,
}: {
  isButton: boolean;
  isSelected: boolean;
  selectHandler?: (type: string) => void;
}) => {
  const clickHandler = () => {
    if (selectHandler && isButton) selectHandler('activity');
  };

  return (
    <div
      className={styles.typeContainer({ select: isSelected })}
      onClick={clickHandler}
    >
      <MountainIcon
        className={styles.icon}
        width={19}
        height={19}
        color={isSelected ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select: isSelected })}>액티비티 동행</span>
    </div>
  );
};

export const ClubType = ({
  isButton,
  isSelected,
  selectHandler,
}: {
  isButton: boolean;
  isSelected: boolean;
  selectHandler?: (type: string) => void;
}) => {
  const clickHandler = () => {
    if (selectHandler && isButton) selectHandler('club');
  };

  return (
    <div
      className={styles.typeContainer({ select: isSelected })}
      onClick={clickHandler}
    >
      <ClubIcon
        className={styles.icon}
        width={19}
        height={19}
        color={isSelected ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select: isSelected })}>클럽 동행</span>
    </div>
  );
};

export const CarType = ({
  isButton,
  isSelected,
  selectHandler,
}: {
  isButton: boolean;
  isSelected: boolean;
  selectHandler?: (type: string) => void;
}) => {
  const clickHandler = () => {
    if (selectHandler && isButton) selectHandler('car');
  };

  return (
    <div
      className={styles.typeContainer({ select: isSelected })}
      onClick={clickHandler}
    >
      <CarIcon
        className={styles.icon}
        width={19}
        height={19}
        color={isSelected ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select: isSelected })}>차량 동행</span>
    </div>
  );
};

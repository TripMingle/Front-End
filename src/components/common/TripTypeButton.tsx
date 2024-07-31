'use client';
import * as styles from '@/styles/components/common/trip-type-box.css';
import { useState } from 'react';
import BedIcon from './icons/BedIcon';
import CoupleIcon from './icons/CoupleIcon';
import FoodIcon from './icons/FoodIcon';
import MountainIcon from './icons/MountainIcon';
import ClubIcon from './icons/ClubIcon';

const TripTypeButton = ({
  isButton,
  isSelected,
  type,
}: {
  isButton: boolean;
  isSelected: boolean;
  type: string;
}) => {
  if (type === 'couple') {
    return <CoupleType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'bed') {
    return <BedType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'food') {
    return <FoodType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'activity') {
    return <ActivityType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'club') {
    return <ClubType isButton={isButton} isSelected={isSelected} />;
  }
};

const CoupleType = ({
  isButton,
  isSelected,
}: {
  isButton: boolean;
  isSelected: boolean;
}) => {
  const [select, setSelect] = useState(isSelected);

  const clickHandler = () => {
    if (isButton) {
      setSelect(!select);
    }
  };

  return (
    <div
      className={styles.typeContainer({ select })}
      onClick={() => {
        clickHandler();
      }}
    >
      <CoupleIcon
        className={styles.icon}
        width={19}
        height={19}
        color={select ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select })}>부부 동행</span>
    </div>
  );
};

export const BedType = ({
  isButton,
  isSelected,
}: {
  isButton: boolean;
  isSelected: boolean;
}) => {
  const [select, setselect] = useState(isSelected);

  const clickHandler = () => {
    if (isButton) {
      setselect(!select);
    }
  };

  return (
    <div
      className={styles.typeContainer({ select })}
      onClick={() => {
        clickHandler();
      }}
    >
      <BedIcon
        className={styles.icon}
        width={19}
        height={19}
        color={select ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select })}>숙소 동행</span>
    </div>
  );
};

export const FoodType = ({
  isButton,
  isSelected,
}: {
  isButton: boolean;
  isSelected: boolean;
}) => {
  const [select, setselect] = useState(isSelected);

  const clickHandler = () => {
    if (isButton) {
      setselect(!select);
    }
  };

  return (
    <div
      className={styles.typeContainer({ select })}
      onClick={() => {
        clickHandler();
      }}
    >
      <FoodIcon
        className={styles.icon}
        width={19}
        height={19}
        color={select ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select })}>식사 동행</span>
    </div>
  );
};

export const ActivityType = ({
  isButton,
  isSelected,
}: {
  isButton: boolean;
  isSelected: boolean;
}) => {
  const [select, setselect] = useState(isSelected);

  const clickHandler = () => {
    if (isButton) {
      setselect(!select);
    }
  };

  return (
    <div
      className={styles.typeContainer({ select })}
      onClick={() => {
        clickHandler();
      }}
    >
      <MountainIcon
        className={styles.icon}
        width={19}
        height={19}
        color={select ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select })}>액티비티 동행</span>
    </div>
  );
};

export const ClubType = ({
  isButton,
  isSelected,
}: {
  isButton: boolean;
  isSelected: boolean;
}) => {
  const [select, setselect] = useState(isSelected);

  const clickHandler = () => {
    if (isButton) {
      setselect(!select);
    }
  };

  return (
    <div
      className={styles.typeContainer({ select })}
      onClick={() => {
        clickHandler();
      }}
    >
      <ClubIcon
        className={styles.icon}
        width={19}
        height={19}
        color={select ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select })}>클럽 동행</span>
    </div>
  );
};

export default TripTypeButton;

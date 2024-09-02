'use client';
import * as styles from '@/styles/components/common/trip-type-box.css';
import { useState } from 'react';
import NonsmokeIcon from './icons/NonsmokeIcon';
import SmokeIcon from './icons/SmokeIcon';
import ShoppingIcon from './icons/ShoppingIcon';
import PhotoIcon from './icons/PhotoIcon';

const TripStyleButton = ({
  isButton,
  isSelected,
  type,
}: {
  isButton: boolean;
  isSelected: boolean;
  type: string;
}) => {
  if (type === 'nonSmoke') {
    return <NonSmokeType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'smoke') {
    return <SmokeType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'shopping') {
    return <ShoppingType isButton={isButton} isSelected={isSelected} />;
  } else if (type === 'photo') {
    return <PhotoType isButton={isButton} isSelected={isSelected} />;
  }
};

const NonSmokeType = ({
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
    <div className={styles.typeContainer({ select })} onClick={clickHandler}>
      <NonsmokeIcon
        className={styles.icon}
        width={19}
        height={19}
        color={select ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select })}>비흡연자</span>
    </div>
  );
};

export const SmokeType = ({
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
    <div className={styles.typeContainer({ select })} onClick={clickHandler}>
      <SmokeIcon
        className={styles.icon}
        width={19}
        height={19}
        color={select ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select })}>흡연자</span>
    </div>
  );
};

export const ShoppingType = ({
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
    <div className={styles.typeContainer({ select })} onClick={clickHandler}>
      <ShoppingIcon
        className={styles.icon}
        width={19}
        height={19}
        color={select ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select })}>쇼핑</span>
    </div>
  );
};

export const PhotoType = ({
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
    <div className={styles.typeContainer({ select })} onClick={clickHandler}>
      <PhotoIcon
        className={styles.icon}
        width={19}
        height={19}
        color={select ? '#3688FF' : '#888888'}
      />
      <span className={styles.text({ select })}>인스타그래머</span>
    </div>
  );
};

export default TripStyleButton;

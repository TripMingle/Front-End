import {
  ActivityType,
  BedType,
  CarType,
  ClubType,
  FoodType,
  SimpleType,
} from '@/components/common/TripTypeButton';
import { typeContainer } from '@/styles/country/board/write/secondstep/info-input.css';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';
import { useState } from 'react';

const TypeBox = () => {
  const { watch, setValue } = useFormContext<BoardForm>();

  const tripType = watch('tripType');

  const typeHandler = (type: string) => {
    if (tripType.includes(type)) {
      setValue(
        'tripType',
        tripType.filter((e) => e !== type),
      );
    } else {
      setValue('tripType', [...tripType, type]);
    }
  };

  return (
    <div className={typeContainer}>
      <FoodType
        isButton={true}
        isSelected={tripType.includes('food')}
        selectHandler={typeHandler}
      />
      <BedType
        isButton={true}
        isSelected={tripType.includes('bed')}
        selectHandler={typeHandler}
      />
      <ActivityType
        isButton={true}
        isSelected={tripType.includes('activity')}
        selectHandler={typeHandler}
      />
      <ClubType
        isButton={true}
        isSelected={tripType.includes('club')}
        selectHandler={typeHandler}
      />
      <SimpleType
        isButton={true}
        isSelected={tripType.includes('simple')}
        selectHandler={typeHandler}
      />
      <CarType
        isButton={true}
        isSelected={tripType.includes('car')}
        selectHandler={typeHandler}
      />
    </div>
  );
};

export default TypeBox;

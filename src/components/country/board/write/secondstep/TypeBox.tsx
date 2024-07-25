import {
  ActivityType,
  BedType,
  ClubType,
  FoodType,
  SimpleType,
} from '@/components/common/TripTypeButton';
import { typeContainer } from '@/styles/country/board/write/secondstep/info-input.css';

const TypeBox = () => {
  return (
    <div className={typeContainer}>
      <FoodType isButton={true} isSelected={false} />
      <BedType isButton={true} isSelected={false} />
      <ActivityType isButton={true} isSelected={false} />
      <ClubType isButton={true} isSelected={false} />
      <SimpleType isButton={true} isSelected={false} />
    </div>
  );
};

export default TypeBox;

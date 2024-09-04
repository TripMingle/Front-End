import * as styles from '@/styles/write/thirdstep/schedule-place.css';
import { SchedulePlaceType } from '@/types/country/place';
import { Draggable } from '@hello-pangea/dnd';
import Image from 'next/image';

type Props = {
  place: SchedulePlaceType;
  index: number;
};

const SchedulePlace = ({ place, index }: Props) => {
  return (
    // TODO:: draggableId의 경우 나중에 uuid로 바꿔서 수정해야함
    <Draggable draggableId={place.id.toString()} index={index}>
      {(provided) => (
        <div
          className={styles.container}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <span className={styles.place}>{place.placeName}</span>
          <Image
            className={styles.icon}
            src="/icons/write_trash.svg"
            width={30}
            height={30}
            alt="deleteIcon"
          />
          <Image
            {...provided.dragHandleProps}
            className={styles.icon}
            src="/icons/write_drag.svg"
            width={30}
            height={30}
            alt="dragIcon"
          />
        </div>
      )}
    </Draggable>
  );
};

export default SchedulePlace;

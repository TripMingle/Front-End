import * as styles from '@/styles/write/thirdstep/schedule-place.css';
import { SchedulePlaceType } from '@/types/country/place';
import { Draggable } from '@hello-pangea/dnd';
import Image from 'next/image';

type Props = {
  place: SchedulePlaceType;
  index: number;
  removeHandler: (
    event: React.MouseEvent<HTMLImageElement>,
    index: number,
  ) => void;
};

const SchedulePlace = ({ place, index, removeHandler }: Props) => {
  return (
    <Draggable draggableId={place.id} index={index}>
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
            onClick={(event) => removeHandler(event, index)}
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

import * as styles from '@/styles/write/thirdstep/schedule-place.css';
import Image from 'next/image';

type Props = {
  name: string;
  nameKor: string;
};

const SchedulePlace = ({ name, nameKor }: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.place}>{nameKor}</span>
      <Image
        className={styles.icon}
        src="/icons/write_trash.svg"
        width={30}
        height={30}
        alt="deleteIcon"
      />
      <Image
        className={styles.icon}
        src="/icons/write_drag.svg"
        width={30}
        height={30}
        alt="dragIcon"
      />
    </div>
  );
};

export default SchedulePlace;

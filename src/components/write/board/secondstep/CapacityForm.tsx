import * as styles from '@/styles/write/secondstep/people-count-box.css';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { BoardForm } from '@/types/country/board';

const CapacityForm = () => {
  const { register } = useFormContext<BoardForm>();

  return (
    <div className={styles.container}>
      <Image src="/icons/user.svg" width={20} height={20} alt="peopleIcon" />
      <input
        className={styles.input}
        type="number"
        {...register('maxCount', {
          valueAsNumber: true,
          validate: (value) => value > 1 || '최소 2명 이상이어야 합니다.',
        })}
      />
      <span>명</span>
    </div>
  );
};

export default CapacityForm;

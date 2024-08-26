import * as styles from '@/styles/write/progress.css';
import Image from 'next/image';

const Progress = ({ step }: { step: number }) => {
  return (
    <div className={styles.container}>
      {Array(step - 1)
        .fill(0)
        .map((element, index) => (
          <div className={styles.circle({ pass: true })} key={index}></div>
        ))}
      <Image
        className={styles.airplane}
        src="/icons/airplane-write.svg"
        width={20}
        height={20}
        alt="stepIcon"
      />
      {Array(4 - step)
        .fill(0)
        .map((element, index) => (
          <div className={styles.circle({ pass: false })} key={index}></div>
        ))}
    </div>
  );
};

export default Progress;

import * as styles from '@/styles/write/progress.css';
import Image from 'next/image';

const Progress = ({
  currentStep,
  allStep,
}: {
  currentStep: number;
  allStep: number;
}) => {
  return (
    <div className={styles.container}>
      {Array(currentStep - 1)
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
      {Array(allStep - currentStep)
        .fill(0)
        .map((element, index) => (
          <div className={styles.circle({ pass: false })} key={index}></div>
        ))}
    </div>
  );
};

export default Progress;

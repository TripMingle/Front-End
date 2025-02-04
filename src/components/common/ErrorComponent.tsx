'use client';

import * as styles from '@/styles/components/common/error-component.css';
import Image from 'next/image';

type Props = {
  title: string;
  message: string;
  button: string;
  handler: () => void;
};

const ErrorComponent = ({ title, message = '', button, handler }: Props) => {
  return (
    <div className={styles.background}>
      <p className={styles.errorText}>
        4
        <Image
          src="/images/b_logo.png"
          width={40}
          height={40}
          alt="tripmingle_logo"
        />
        4 ERROR
      </p>
      <p className={styles.title}>{title}</p>
      <span className={styles.message}>{message}</span>
      <button className={styles.button} onClick={handler}>
        {button}
      </button>
    </div>
  );
};

export default ErrorComponent;

'use client';
import * as styles from '@/styles/components/common/modal-wrapper.css';
import { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
};

const ModalWrapper = ({ isOpen, closeModal, children }: Props) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const propagationHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const backgroundHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    propagationHandler(event);
    closeModal();
  };

  if (!isOpen) return <></>;

  return (
    <div className={styles.background} onClick={backgroundHandler}>
      <div className={styles.modal} onClick={propagationHandler}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;

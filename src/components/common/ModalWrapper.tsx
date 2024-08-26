'use client';
import * as styles from '@/styles/components/common/modal-wrapper.css';
import { ReactNode, useEffect } from 'react';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
};

const ModalWrapper = ({ isOpen, closeModal, children }: Props) => {
  const propagationHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const backgroundHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    propagationHandler(event);
    closeModal();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

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

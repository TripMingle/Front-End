'use client';
import * as styles from '@/styles/components/common/modal-wrapper.css';
import { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
};

const ModalWrapper = ({ isOpen, closeModal, children }: Props) => {
  const propagationHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  if (!isOpen) return <></>;

  return (
    <div className={styles.background} onClick={closeModal}>
      <div className={styles.modal} onClick={propagationHandler}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;

'use client';
import * as styles from '@/styles/components/common/modal-wrapper.css';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

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

  if (!isOpen) return <></>;

  return createPortal(
    <div className={styles.background} onClick={backgroundHandler}>
      <div className={styles.modal} onClick={propagationHandler}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default ModalWrapper;

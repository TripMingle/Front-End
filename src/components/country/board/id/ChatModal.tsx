'use client';

import Image from 'next/image';
import * as styles from '@/styles/country/board/id/chat-button.css';
import { useEffect } from 'react';

const ChatModal = ({
  isOpen,
  nickName,
  userId,
  chatHandler,
}: {
  isOpen: boolean;
  nickName: string;
  userId: number;
  chatHandler: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (isOpen)
    return (
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.modalTitle}>
            <p>
              <strong>{nickName}</strong> 님에게 보내기
            </p>
            <button className={styles.modalClose} onClick={chatHandler}>
              <Image
                className={styles.closeIcon}
                src="/icons/close.svg"
                alt="closeChat"
                width={15}
                height={15}
              />
            </button>
          </div>
          <textarea
            className={styles.textContainer}
            placeholder="내용을 입력하세요."
            rows={8}
          />
          <button className={styles.sendContainer}>
            <Image
              className={styles.icon}
              src="/icons/send.svg"
              alt="sendChat"
              width={20}
              height={20}
            />
            보내기
          </button>
        </div>
      </div>
    );
  else return <></>;
};

export default ChatModal;

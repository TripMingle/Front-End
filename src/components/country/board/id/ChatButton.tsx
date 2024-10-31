'use client';
import useModal from '@/hooks/useModal';
import { useUserStore } from '@/store/userStore';
import * as styles from '@/styles/country/board/id/chat-button.css';
import Image from 'next/image';
import ChatModal from './ChatModal';
import LoginModal from '@/components/common/LoginModal';

const ChatButton = ({
  nickName,
  userId,
}: {
  nickName: string;
  userId: number;
}) => {
  const { isOpen, openModal, closeModal } = useModal();
  const { isLoggedIn } = useUserStore();
  return (
    <>
      {isLoggedIn ? (
        <ChatModal
          nickName={nickName}
          userId={userId}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      ) : (
        <LoginModal isOpen={isOpen} closeModal={closeModal} />
      )}
      <button className={styles.buttonContainer} onClick={openModal}>
        <Image
          className={styles.icon}
          src="/icons/send.svg"
          alt="sendChat"
          width={15}
          height={15}
        />
        동행 요청
      </button>
    </>
  );
};

export default ChatButton;

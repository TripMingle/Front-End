import * as styles from '@/styles/country/board/id/chat-button.css';
import Image from 'next/image';

const ChatButton = ({ openModal }: { openModal: () => void }) => {
  return (
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
  );
};

export default ChatButton;

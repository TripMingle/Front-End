import * as styles from '@/styles/country/board/id/chat-button.css';
import Image from 'next/image';

const ChatButton = ({ chatHandler }: { chatHandler: () => void }) => {
  return (
    <button className={styles.buttonContainer} onClick={chatHandler}>
      <Image
        className={styles.icon}
        src="/icons/send.svg"
        alt="sendChat"
        width={15}
        height={15}
      />
      채팅하기
    </button>
  );
};

export default ChatButton;

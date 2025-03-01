import ModalWrapper from './ModalWrapper';
import { useUserStore } from '@/store/userStore';
import Image from 'next/image';
import { closeIcon, title } from '@/styles/components/common/modal-wrapper.css';
import * as styles from '@/styles/components/common/logout-modal.css';
import { removeToken } from '@/utils/server/token';
import { useRouter } from 'next/navigation';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const LogoutModal = ({ isOpen, closeModal }: Props) => {
  const logout = useUserStore((state) => state.logout);
  const router = useRouter();

  const logoutHandler = () => {
    removeToken();
    logout();
    router.refresh();
  };

  return (
    <ModalWrapper isOpen={isOpen} closeModal={closeModal}>
      <div className={styles.conatiner}>
        <Image
          className={closeIcon}
          src="/icons/close.svg"
          alt="closeChat"
          width={16}
          height={16}
          onClick={closeModal}
        />
        <p className={title}>로그아웃 하시겠습니까?</p>
        <div>
          <button
            className={styles.button({ select: false })}
            onClick={closeModal}
          >
            취소
          </button>
          <button
            className={styles.button({ select: true })}
            onClick={logoutHandler}
          >
            로그아웃
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default LogoutModal;

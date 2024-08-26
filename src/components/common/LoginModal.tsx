import ModalWrapper from './ModalWrapper';
import { useUserStore } from '@/store/userStore';
import Image from 'next/image';
import { closeIcon, title } from '@/styles/components/common/modal-wrapper.css';
import * as styles from '@/styles/components/common/logout-modal.css';
import { usePathname, useRouter } from 'next/navigation';
import useModal from '@/hooks/useModal';
import { useEffect } from 'react';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

const LoginModal = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const { isOpen, openModal, closeModal } = useModal();
  const router = useRouter();
  const pathName = usePathname();

  const loginHandler = () => {
    window.sessionStorage.setItem('prevPage', pathName);
    router.push('/login');
  };

  useEffect(() => {
    if (!isLoggedIn) openModal();
    else closeModal();
  }, [isLoggedIn]);

  if (isLoggedIn) return <></>;
  else
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
          <p className={title}>
            해당 서비스는 로그인이 필요합니다.<br></br>로그인 화면으로
            이동하시겠습니까?
          </p>
          <div>
            <button
              className={styles.button({ select: false })}
              onClick={closeModal}
            >
              취소
            </button>
            <button
              className={styles.button({ select: true })}
              onClick={loginHandler}
            >
              로그인화면으로 이동
            </button>
          </div>
        </div>
      </ModalWrapper>
    );
};

export default LoginModal;

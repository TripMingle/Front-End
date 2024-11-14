'use client';
import Image from 'next/image';
import * as styles from '@/styles/components/common/countryWrite.css';
import { useRouter } from 'next/navigation';
import LoginModal from './LoginModal';
import useModal from '@/hooks/useModal';
import { useUserStore } from '@/store/userStore';

const CountryWrite = ({ type }: { type: string }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const router = useRouter();

  const clickHandler = (type: string) => {
    if (isLoggedIn) {
      if (type == 'board') router.push('/write/board');
      else router.push('/write/post');
    } else openModal();
  };

  return (
    <>
      <div className={styles.countryWriteContainer}>
        <div
          onClick={() => clickHandler(type)}
          className={styles.iconContainer}
        >
          <Image
            src="/icons/pencil.svg"
            alt="writeIcon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default CountryWrite;

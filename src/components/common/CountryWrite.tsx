'use client';
import Image from 'next/image';
import * as styles from '@/styles/components/common/countryWrite.css';
import { useRouter } from 'next/navigation';
import LoginModal from './LoginModal';
import useModal from '@/hooks/useModal';
import { useUserStore } from '@/store/userStore';

const CountryWrite = ({ type }: { type: string }) => {
  // const [active, setActive] = useState<boolean>(false);
  const { isOpen, openModal, closeModal } = useModal();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const router = useRouter();

  const clickHandler = (type: string) => {
    if (isLoggedIn) router.push(`/write`);
    else openModal();
  };

  return (
    <>
      <div className={styles.countryWriteContainer}>
        <div className={styles.writeItemContainer}>
          <div
            className={styles.writeContainer({ active: false, type: 'board' })}
            onClick={() => clickHandler('board')}
          >
            동행글
          </div>
          <div
            className={styles.writeContainer({ active: false, type: 'post' })}
            onClick={() => clickHandler('post')}
          >
            정보글
          </div>
          <div
            onClick={() => clickHandler(type)}
            className={styles.iconContainer}
          >
            <Image
              className={styles.icon}
              src="/icons/pencil.svg"
              alt="writeIcon"
              width={24}
              height={24}
            />
          </div>
        </div>
        <p className={styles.writeText}>등록하기</p>
      </div>
      <LoginModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default CountryWrite;

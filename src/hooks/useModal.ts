import { useState } from 'react';

type UseModalReturn = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
};

const useModal = (initialState: boolean = false): UseModalReturn => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  return { isOpen, openModal, closeModal, toggleModal };
};

export default useModal;

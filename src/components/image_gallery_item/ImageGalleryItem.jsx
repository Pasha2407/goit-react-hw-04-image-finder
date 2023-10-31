import React, { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../modal/Modal';

export const ImageGalleryItem = ({ imageSrc, modalSrc, alt }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img src={imageSrc} alt={alt} onClick={openModal}></img>
      {isOpenModal && (
        <Modal modalSrc={modalSrc} alt={alt} closeModal={closeModal} />
      )}
    </li>
  );
};

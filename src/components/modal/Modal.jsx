import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ closeModal, modalSrc, alt }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const overayClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={css.Overlay} onClick={overayClick}>
      <div className={css.Modal}>
        <img src={modalSrc} alt={alt} />
      </div>
    </div>
  );
};

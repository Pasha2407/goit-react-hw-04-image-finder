import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ closeModal, modalSrc, alt }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

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

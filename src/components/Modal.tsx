import { useState, useEffect } from 'react';
import styles from './modal.module.css';

interface ModalProps {
  openModal: boolean;
  title: string;
  body: string;
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { children, openModal, title, body } = props;
  const [open, setOpen] = useState(openModal);
  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);
  if (!open) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p>{title}</p>
        <p>{body}</p>
        <div className={styles.childItem}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

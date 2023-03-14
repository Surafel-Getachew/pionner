import React, { useState } from 'react';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import Button from '../components/Button';
import styles from './pageTwo.module.css';

const PageTwo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '' });

  const [removeCount, setRemoveCount] = useState(0);
  const [deleteCount, setDeleteCount] = useState(0);

  const [deleteText, setDeletText] = useState(true);
  const [activeButton, setActiveButton] = useState('cta-btn');

  const { title, body } = modalContent;

  const onCTAClick = () => {
    setOpenModal(true);
    setModalContent({
      title: 'Information',
      body: 'You have clicked the Single CTA button.',
    });
    setActiveButton('cta-btn');
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const onRemoveClick = () => {
    setOpenModal(true);
    setModalContent({
      title: 'Remove?',
      body: `Are you sure you want to remove the Remove ${removeCount} Button`,
    });
    setActiveButton('remove-btn');
  };
  const onDeleteClick = () => {
    setOpenModal(true);
    setActiveButton('delete-btn');
    const modalBody = deleteText
      ? `Delete ${deleteCount}`
      : `Disabled ${deleteCount}`;
    setModalContent({
      title: 'Delete?',
      body: `Are you sure you want to delete the ${modalBody} button? This cannot be undone!`,
    });
  };

  const onRemoveConfirm = () => {
    setRemoveCount((removeCount) => removeCount + 1);
    closeModal();
  };
  const onDeleteConfirm = () => {
    setDeletText((deleteText) => !deleteText);
    setDeleteCount((deleteCount) => deleteCount + 1);
    closeModal();
  };

  const renderModalContent = () => {
    switch (activeButton) {
      case 'cta-btn':
        return (
          <button className={styles.okBtn} onClick={closeModal}>
            Ok
          </button>
        );
      case 'remove-btn':
        return (
          <>
            <button className={styles.cancelBtn} onClick={closeModal}>
              Cancel
            </button>
            <button className={styles.removeBtn} onClick={onRemoveConfirm}>
              Remove
            </button>
          </>
        );
      case 'delete-btn':
        return (
          <>
            <button className={styles.cancelBtn} onClick={closeModal}>
              Cancel
            </button>
            <button className={styles.deleteBtn} onClick={onDeleteConfirm}>
              Delete
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className={styles.pageTwoContainer}>
        <div className={styles.btnContainer}>
          <Button placeholder='Single-CTA' onClick={onCTAClick} />

          <Button
            placeholder={`Remove ${removeCount}`}
            onClick={onRemoveClick}
          />

          <Button
            placeholder={
              deleteText ? `Delete ${deleteCount}` : `Disabled ${deleteCount}`
            }
            onClick={onDeleteClick}
          />
        </div>
      </div>
      <Modal title={title} body={body} openModal={openModal}>
        {renderModalContent()}
      </Modal>
    </Layout>
  );
};

export default PageTwo;

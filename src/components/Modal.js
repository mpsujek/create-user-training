import React from 'react';
import Button from './Button';
import styles from './Modal.module.css';
const Modal = (props) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2>Error</h2>
        <p>{props.message}</p>
        <Button onClick={props.hideModal}>Ok</Button>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from 'react';
import Modal from './Modal';
import Button from './Button';
import styles from './User.module.css';

const User = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [showModal, setShowModal] = useState();

  const ageChangeHanlder = (event) => {
    setUserAge(event.target.value);
  };
  const userNameChangeHanlder = (event) => {
    setUserName(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.length === 0) {
      setShowModal({ message: 'Please provide a valid name' });
    }
    if (userAge < 0) {
      setShowModal({ message: 'Age cant be -1' });
    }
    const id = Math.floor(Math.random() * 90000) + 10000;
    props.addUser({ id, userName, userAge });
    setUserName('');
    setUserAge('');
  };

  const modalHandler = () => {
    setShowModal(null);
  };

  return (
    <>
      {showModal && (
        <Modal message={showModal.message} hideModal={modalHandler} />
      )}
      <div className={styles.wrapper}>
        <form onSubmit={addUserHandler}>
          <div className={styles.input__wrapper}>
            <label>Username</label>
            <input
              type='text'
              value={userName}
              onChange={userNameChangeHanlder}
            />
          </div>
          <div className={styles.input__wrapper}>
            <label>Age (Years)</label>
            <input type='number' value={userAge} onChange={ageChangeHanlder} />
          </div>
          <Button>Add User</Button>
        </form>
      </div>
    </>
  );
};

export default User;

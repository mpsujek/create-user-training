import React, { useState } from 'react';
import User from './components/User';
import UsersList from './components/UsersList';
import Modal from './components/Modal';
import styles from './App.module.css';
const DUMMY_LIST = [{ id: 1, userName: 'Test', userAge: '36' }];

function App() {
  const [usersList, setUsersList] = useState(DUMMY_LIST);
  const [showModal, setShowModal] = useState(false);

  const getUserHandler = (newUser) => {
    setUsersList((prevUserList) => {
      return [newUser, ...prevUserList];
    });
  };

  const showModalHandler = () => {
    setShowModal(true);
  };
  return (
    <>
      <Modal showModal={showModal} message={'Just temporary message'} />
      <div className={styles.container}>
        <User addUser={getUserHandler} />
        <UsersList usersList={usersList} />
      </div>
    </>
  );
}

export default App;

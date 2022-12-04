import React, { useState } from 'react';
import User from './components/User';
import UsersList from './components/UsersList';
import styles from './App.module.css';
const DUMMY_LIST = [{ userName: 'Test', userAge: '36' }];

function App() {
  const [usersList, setUsersList] = useState(DUMMY_LIST);
  const getUserHandler = (newUser) => {
    setUsersList((prevUserList) => {
      return [newUser, ...prevUserList];
    });
  };
  return (
    <div className={styles.container}>
      <User addUser={getUserHandler} />
      <UsersList usersList={usersList} />
    </div>
  );
}

export default App;

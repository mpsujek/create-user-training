import React, { useState } from 'react';
import styles from './User.module.css';

const User = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const ageChangeHanlder = (event) => {
    setUserAge(event.target.value);
  };
  const userNameChangeHanlder = (event) => {
    setUserName(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.length === 0) {
      return alert('Add proper name');
    }
    if (userAge < 0) {
      return alert('Age cant be -1');
    }
    props.addUser({ userName, userAge });
    setUserName('');
    setUserAge('');
  };
  return (
    <>
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
          <button className={styles.button}>Add User</button>
        </form>
      </div>
    </>
  );
};

export default User;

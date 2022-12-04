import React from 'react';
import style from './UserList.module.css';
function UsersList({ usersList }) {
  return (
    <>
      <div className={style.wrapper}>
        <ul className={style.userslist}>
          {usersList.map((singleUser) => (
            <li
              className={style.listelement}
            >{`${singleUser.userName} (${singleUser.userAge} years old)`}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default UsersList;

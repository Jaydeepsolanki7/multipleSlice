// User.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './UserSlice';
import './User.css';

const User = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userSet, setUserSet] = useState(false); // State to track whether the user is set

  const handleSetUser = () => {
    dispatch(setUser({ username, email }));
    setUserSet(true); // Set the state to true when the button is clicked
    console.log("User set successfully");
  };

  return (
    <div className="user-container">
      <h2>User Profile</h2>
      {userSet && ( // Render only if the user is set
        <div className="user-info">
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <div className="user-form">
        <input
          className="user-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="user-input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button className="user-button" onClick={handleSetUser}>Set User</button>
      </div>
    </div>
  );
};

export default User;

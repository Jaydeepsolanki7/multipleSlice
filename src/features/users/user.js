// User.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './userSlice';

const User = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSetUser = () => {
    dispatch(setUser({ username, email }));
  };

  return (
    <div>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSetUser}>Set User</button>
    </div>
  );
};

export default User;

import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

const UserInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted name: " + name);
    console.log("Submitted email: " + email);
    console.log("Submitted address: " + address);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" type="text" placeholder='Name' value={name} onChange={handleNameChange} />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" placeholder='Email' value={email} onChange={handleEmailChange} />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel htmlFor="address">Address</InputLabel>
          <Input id="address" type="text" placeholder='Address' value={address} onChange={handleAddressChange} />
        </FormControl>

        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </div>
  );
};

export default UserInput;

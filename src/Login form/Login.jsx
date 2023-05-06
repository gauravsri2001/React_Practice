
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newEntry, setNewEntry] = useState([]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Username:', username);
  //   console.log('Password:', password);
  //   // Perform login authentication

  return (
    <form action=''>

    <div>
    <label htmlFor='email'> Email </label>
    <input 
    type="text" 
    name='email' 
    id='email' 
    autoComplete='off' 
    value={email}
      onChange={(e) =>setEmail(e.target.value)}
    />
    </div>
      
      <div>
      <label htmlFor='password'>Password </label>
        
        <input 
        type="password" 
        name='password' 
        id='password' 
        autoComplete='off'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      
      </div>
      
      <button type="submit">Log in</button>
    </form>
  );
  };


export default Login;

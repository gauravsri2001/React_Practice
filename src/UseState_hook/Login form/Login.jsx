
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newEntry = {id: new Date().getTime().toString(), email, password};
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry)

    //this makes the email and password field empty after the submission
    setEmail("");
    setAllEntry("");
  }
  return (
    <>
<form action='' onSubmit={submitForm}>

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

<div>
  {
    allEntry.map((curElem) =>{
      const{id, email, password} = curElem;
return(
  <div key={curElem.id}> 
  <p>{email}</p>
  <p>{password}</p>
  </div>
)
    })
  }
</div>
    </>
    
  );
  };
export default Login;

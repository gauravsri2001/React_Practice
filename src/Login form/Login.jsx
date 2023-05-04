// import React from "react";
// const Login = () =>{
//     return(
//         <>
//         <form action="">
//             <div>
//                 <label htmlFor="email">Email</label>
//                 <input type="text" name="email" id ="email" />
//             </div>

//         </form>
//         </>
//     );
// };
// export default Login;
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Perform login authentication
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}

export default Login;

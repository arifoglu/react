import React, { useState } from 'react'

const Form = ({ registered }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordagain, setPasswordagain] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    alert("please enter your all informations");

    const savedPerson = {
      username: username,
      email: email,
      password: password,
      passwordagain: passwordagain,
    };
   
    registered(savedPerson);
  };


  

  return (
    <React.Fragment>
      <div id="maindiv">
        <h1 id="signup">Sign UP</h1>
        <form id="forms" type="submit">
          <input
            className="inputs"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="inputs"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputs"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="inputs"
            type="password"
            placeholder="password again"
            value={passwordagain}
            onChange={(e) => setPasswordagain(e.target.value)}
          />
          <button className="button" type="submit" onClick={handleClick}>
            SIGN
          </button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Form

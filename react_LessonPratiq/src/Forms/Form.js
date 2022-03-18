import { useState } from 'react'

function App() {
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [passwordagain, setPasswordagain] = useState([]);

  const [yeniad, setYeniAd] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.preventDefault();

    const newlist = {
      username : username,
      email : email,
      password : password,
      passwordagain : passwordagain,
    };
    displaylist(newlist);
  };

  const displaylist = (person) => {
    setYeniAd([...yeniad, person]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input
          type="password"
          value={passwordagain}
          onChange={(e) => setPasswordagain(e.target.value)}
          placeholder="passwordagain"
        />
      </form>
      <button type="submit" onClick={handleClick}>
        SIGN
      </button>
      <p>{yeniad}</p>
    </div>
  )
}

export default App

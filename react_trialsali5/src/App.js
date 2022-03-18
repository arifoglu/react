import { useState , useEffect } from "react"


function App() {

const[userList,setUserList] = useState([]);

useEffect(() => {
  getUserList();
},[]);

const getUserList = async () => {
  const response = await fetch("http://localhost:3001/profile");
  const data = await response.json();
  setUserList(data);
};

if(userList) {
  console.log(userList)
}

  return (
    <div className="App">
      <header className="App-header">HI</header>
    </div>
  );
}

export default App;

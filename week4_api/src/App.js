import { useState ,useEffect } from 'react'

function App() {



  const[userList,setUserList] = useState([]);

  useEffect(()=> {
    getUserList();
  },[]);
  
//api ler deneme
 //https://jsonplaceholder.typicode.com/users
 //http://www.omdbapi.com/?i=tt3896198&apikey=5a9706cf
//https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=6774a08603e347c6a97b8401ee18f7d2&include=minutely
//https://api.chucknorris.io/jokes/random



const getUserList = async () => {
  const response = await fetch("https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=6774a08603e347c6a97b8401ee18f7d2&include=minutely")
  const data = await response.json();
  console.log("gelen bilgiler",data); 
}

  return (
    <div className="App">
 
    </div>
  );
}

export default App;

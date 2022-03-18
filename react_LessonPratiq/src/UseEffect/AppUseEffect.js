import { useEffect, useState } from 'react'

function App() {
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // useEffect(()=> {
  //   console.log('sayfa her sefer tekrar render olur');
  // });

  // useEffect(()=> {
  //   console.log('sayfa tek sefer render olur ');
  // },[]);

  // useEffect(()=> {
  //   console.log('sayfa count 1 icin render olur');
  // },[count1]);

  // useEffect(()=> {
  //   console.log('sayfa  count 2 icin render olur');
  // },[count2]);

      //  <div>
      //   <span>{count1}</span>
      //   <button onClick={() => setCount1(count1 + 1)}>count1 +</button>
      //   <br></br>

      //   <span>{count2}</span>
      //   <button onClick={() => setCount2(count2 + 1)}>count2+</button>
      // </div>




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
     {}
    </div>
  )
}

export default App

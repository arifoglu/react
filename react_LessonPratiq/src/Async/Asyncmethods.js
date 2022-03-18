import {React, useState ,useEffect }from 'react'

const Asyncmethods = () => {
    //data state and storage
    const [ data,setData ]= useState([]);

    useEffect( ()=> {
        //loadData();
        getData();
    }, []);

///////// 2 yontem de kullanilabilir   

/////////arrow function yapisi

// // const loadData= async () =>{
// //    await fetch("https://jsonplaceholder.typicode.com/users")
// //     .then(response => response.json())
// //     .then(receivedata => setData(receivedata));
// }

/////////classic function yapisi

async function getData() {
    const api ="https://jsonplaceholder.typicode.com/users";
    const result =await fetch(api);
    const getResult =await result.json();
    setData(getResult);
    console.log(getResult);

}

///////// data degiskeninde map ile istedigimiz veriyi alabiliriz
  return (
    //console.log(data),
    <div>
      <p >Fetch Async Await</p>
      {data.map(user => (
          <div key={user.id}>{user.name}, {user.username}</div>
      ))}
    </div>
  )
}

export default Asyncmethods

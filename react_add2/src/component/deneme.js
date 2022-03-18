import './App.css';
import { useState } from 'react'


function App() {

const[counter,setCounter] = useState(0);
const[name,setName] = useState("");
const[print,setPrint] = useState("");

  
  return (
    <div className="App">
      <input onChange={(e)=> setName(e.target.value)} value={name}/>
    {counter} 
    <button onClick={()=> setCounter(counter+1)}>+</button>
    <button onClick={(e)=> setPrint(!print)}>print</button>
    {print && name}
    </div>
  );
}

export default App;
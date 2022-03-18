import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('');

  
 const polindrom = () => {
   if(name.length > 2 && name === name.split("").reverse("").join("")){
    alert("polindrom");
   }else alert("polindrom degildir")
 };
 

  return (
    <div className="App">
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={polindrom}>+</button>
      <p>{name}</p>
    </div>
  )
}

export default App

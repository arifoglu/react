import React, { useState } from 'react'

function App() {
  //counter tiklamayi tutuyor
  const [counter, setCounter] = useState(0)
  const arttir = () => {
    setCounter(counter + 1)
  }
  const azalt = () => {
    setCounter(counter - 1)
  }

  //input alanina girilen degeri tutuyor
  const [text, setText] = useState("please enter your name")

  // const handleChange = (pValue)=>{
  //   setText(pValue)
  // }
 
  return (
    <div className="App">
      <React.Fragment>
        <div>
          <button onClick={arttir}>Arttir</button>
          <span id="counter-value">{counter}</span>
          <button onClick={azalt}>Azalt</button>
        </div>
        <hr />
        <hr />
        <div>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <p>{text}</p>
        </div>
      </React.Fragment>
    </div>
  )
}

export default App

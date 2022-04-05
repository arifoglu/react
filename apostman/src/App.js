import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    getINfo()
  }, [])

  const getINfo = async () => {
    const url = 'http://transport.opendata.ch/v1/locations?query=Basel'
    const response = await fetch(url)
    const data = await response.json()
    setInfo(data)
    console.log(data)
  }

  return (
    <div className="App">
      <h1>Hi</h1> 
      { !info && info?.map((item ,id ) => (
        <React.Fragment>
          <p key={id}>{item.name}</p>
        </React.Fragment>
      ))}
    </div>
  )
}

export default App

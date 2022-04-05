import { useState } from 'react'
import './App.css'
import Checklist from './components/Checklist'
import FetchList from './components/FetchList'
import Hello from './components/Hello'


function App() {
  const [names, setNames] = useState([
    {
      firstname: 'adam',
      lastname: 'belli',
    },
    {
      firstname: 'madam',
      lastname: 'telli',
    },
    {
      firstname: 'madam',
      lastname: 'belli',
    },
  ])



  return (
    <div className="App">
      {/* <Hello names={names} />
      <Checklist /> */}
      {/* <FetchList /> */}
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import List from './components/List'
import Select from './components/Select'
import Transport from './components/Transport'

function App() {

const [list, setList] = useState('');
const [transport, setTransport] = useState([]);

const selected = (pnewList) => {
  setList([...list,pnewList]);
}

  return (
    <div className="App">
      <Select selected={selected}/>
      <Transport transport={transport}/>
      <List list={list} />
      
      
    </div>
  )
}

export default App

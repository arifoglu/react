import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import PersonList from './components/PersonList'

function App() {
  const [newpeople, setNewpeople] = useState([])

  const registered = (person) => {
    setNewpeople([...newpeople, person])
  }

  useEffect(() => {
    //during initialing

    const getData = async () => {
      const response = await fetch('http://localhost:3000/employee')
      const incomingdata = await response.json()
    };
  getData()
  }, [])

  return (
    <div className="App">
      <Form registered={registered} />
      <PersonList newpeople={newpeople} />
    </div>
  )
}

export default App

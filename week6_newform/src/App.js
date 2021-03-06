import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import PersonList from './components/PersonList'

function App() {
  
  const[newpeople,setNewpeople]=useState([]);

  const registered =(person) => {
    setNewpeople([...newpeople,person]);
  };

  

  const handleDelete = (firstname) => {
    const savedlist = newpeople.filter(names => names.firstname !== firstname ) ;
    setNewpeople(savedlist)
    
  }

  return (
    <div className="App">
      <div className="container px-4">
        <div className="row gx-5">
          <Form registered={registered}/>
          <PersonList newpeople={newpeople} handleDelete={handleDelete}/>
        </div>
      </div>
    </div>
  )
}

export default App

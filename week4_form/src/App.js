import { useState } from "react";
import Form from "./Form";
import PersonList from "./PersonList";


function App() {

  const[newpeople,setNewpeople]=useState([]);

  const registered =(person) => {
    setNewpeople([...newpeople,person]);
  };

  return (
    <div className="App">
     <Form registered={registered}/>
     <PersonList newpeople={newpeople}/>
    </div>
  );
}

export default App;

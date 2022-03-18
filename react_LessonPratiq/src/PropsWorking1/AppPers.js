import { useState } from "react";
import Person from "./components/Person";
import Student from "./components/Student";

const  App = ()=> {

const [personFirstName, setPersonFirstName] = useState("Ahmet");
const [personLastName, setPersonLastName] = useState("Demir");

  return ( 
  <div className="App">
    
  <Person firstName={personFirstName} lastName={personLastName} />
  <Student age="32" />
  </div>
  );
}

export default App;

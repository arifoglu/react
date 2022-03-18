import React, { useState } from "react";
import AddPerson from "./components/AddPerson";
import PersonList from "./components/PersonList";

function App() {
  const[personList,setPersonList]=useState([]);

  const addPerson = (pNewPerson) => {
    setPersonList([...personList,pNewPerson]);
  };

  return (
    <React.Fragment>
      <AddPerson addPerson={addPerson}/>
      <PersonList personList={personList}/>
    </React.Fragment>
  );
}

export default App;

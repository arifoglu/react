import React, { useState } from "react";
import Isimlistesi from "./components/Isimlistesi";
import Kayitform from "./components/Kayitform";

function App() {

 const[personlist,setPersonlist]=useState([]);

 const addperson = (pnewlist) => {
   setPersonlist([...personlist,pnewlist]);
 };


  return (
   <React.Fragment>
    <Kayitform addperson={addperson}/>
    <Isimlistesi personlist={personlist}/>
   </React.Fragment>
  );
}

export default App;

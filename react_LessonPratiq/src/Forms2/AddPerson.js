import React, { useState } from 'react'

const AddPerson = ({ addPerson }) => {

  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");


const handleClick = (e) => {
  e.preventDefault();
  const newPerson = {
    firstName : firstName ,
    lastName : lastName ,
  };
  addPerson(newPerson);
}



  return (
    <React.Fragment>
      <form>
        <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)}  />
        <input type="text" value={lastName}  onChange={(e)=> setLastName(e.target.value)}  />
        <button type="submit" onClick={handleClick}>Save</button>
      </form>
      <br></br>
      <br></br>
    </React.Fragment>
  )
}

export default AddPerson
import React, { useState } from 'react'

const Kayitform = () => {

const[firstname,SetFirstname]=useState('')


const handleClick = (e) => {
    e.preventDefault();
    console.log("submit oldu");
    
    
};


  return (
    <React.Fragment>
      <form>
        <h1>KAYIT FORM</h1>
        <input type="text" value={firstname} placeholder="name"   onChange={(e)=> SetFirstname(e.target.value)} />
        <button type="submit" onClick={handleClick}>Save</button>
      </form>
      

      <br></br>
      <br></br>
    </React.Fragment>
  )
}

export default Kayitform

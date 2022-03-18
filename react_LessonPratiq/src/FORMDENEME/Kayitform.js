import React, { useState } from 'react'

const Kayitform = ({ addperson }) => {

const[firstname,SetFirstname]=useState('')
const[lastname,SetLastname]=useState('')

const handleClick = (e) => {
    e.preventDefault();

    const newlist = {
        firstname : firstname ,
        lastname :lastname,
    };
    addperson(newlist);
};


  return (
    <React.Fragment>
      <form>
        <h1>KAYIT FORM</h1>
        <input type="text" value={firstname} placeholder="name"   onChange={(e)=> SetFirstname(e.target.value)} />
        <input type="text" value={lastname} placeholder="surname" onChange={(e)=> SetLastname(e.target.value)} />
        <button type="submit" onClick={handleClick}>Save</button>
      </form>
      <br></br>
      <br></br>
    </React.Fragment>
  )
}

export default Kayitform

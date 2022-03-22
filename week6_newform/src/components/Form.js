import React, { useState } from 'react'

const Form = ({ registered }) => {

  const[firstname,setFirstname] = useState('');
  const[lastname,setLastname] = useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

const handleClick = (e) => {
  e.preventDefault();

  const savedPerson =  {
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password,
  };
  registered(savedPerson);
}
  return (
    <React.Fragment>
      <div className="col m-4 ">
         <div className="p-5  border bg-light">
               <h3 className="p-6">Register Form</h3>
               <div className="row">
                 <form type='submit'>
                  <input   value={firstname} onChange = {(e)=> setFirstname(e.target.value)}   type="text" className="form-control m-1" placeholder="First name" aria-label="First name"/>
                  <input   value={lastname}  onChange = {(e)=> setLastname(e.target.value)}   type="text" className="form-control m-1" placeholder="Last name" aria-label="Last name"/>
                  <input   value={email}     onChange = {(e)=> setEmail(e.target.value)}   type="email" className="form-control m-1" placeholder="email" aria-label="Last name"/>
                  <input   value={password}  onChange = {(e)=> setPassword(e.target.value)}   type="password" className="form-control m-1" placeholder="password" aria-label="Last name"/>
                  </form>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button onClick={handleClick} className="btn btn-primary" type="button">Add</button>
                   </div>
               </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Form
import React from 'react'

const AddPerson = (
    {
        handleSubmit ,
        firstname,setFirstname,
        lastName,setLastName,
        password,setPassword ,
        email ,setEmail ,about,setAbout
    }
) => {

  return (
    <React.Fragment>
        <div>
            <h1>AddPerson</h1>
            <form onSubmit={handleSubmit}> 

            <input 
            type="text" 
            required
            value={firstname}
            onChange={(e)=> setFirstname(e.target.value)}
            />
             <input 
            type="text" 
            required
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
            />
             <input 
            type="text" 
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
             <input 
            type="text" 
            required
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button>add</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default AddPerson
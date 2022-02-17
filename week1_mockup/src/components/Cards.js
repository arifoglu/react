import React from 'react'

const Cards = () => {

  const Change = () => {
    const names = ['cards', 'doesnt', 'work' ,'cards doesnt work'];
    const int = Math.floor(Math.random() * 4);
    return names[int] ;
  }

  return (
   <div id="cards">
     <h1>{Change()}</h1>
     <h1>{Change()}</h1>
     <h1>{Change()}</h1>
   </div>
    
  )
}

export default Cards
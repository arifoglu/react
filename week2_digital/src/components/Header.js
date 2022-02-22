//date is assigned to some variables
//it was written by Header function to inside header element 
import React from 'react'

const Header = () => {

  const zaman = new Date ();

  const year = zaman.getFullYear();
  const month = zaman.getMonth();
  const date = zaman.getDate();
  const hours =zaman.getHours();
  const minutes =zaman.getMinutes();
  const seconds =zaman.getSeconds();

    return (
    <header id="oclock">
      <p > 
      {hours} :  {minutes} : {seconds}   
      </p> 
      <p >
      {date} /{month}/{year} 
      </p>  
    </header>
  )
}

setInterval(Header,1000)

export default Header
import React from 'react'

//footer fragment and  get Date 
const Footer = () => {

    const today = new Date()
  return (
    <footer>
       <p id="foot">
           Copyright &copy; {today.getFullYear()}
       </p>
    </footer>
  )
}

export default Footer
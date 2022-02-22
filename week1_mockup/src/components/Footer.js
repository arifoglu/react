import React from 'react'

//footer fragment and  get Date 
const Footer = () => {

    const today = new Date()
  return (
    <footer>
       <p id="foot">
           Copyright &copy; {today.getHours()}
       </p>
    </footer>
  )
}

export default Footer
import React from 'react'

const Footer = () => {
const year = new Date();

  return (
    <footer>
       <p id="foot">
           Copyright &copy; {year.getFullYear()}
       </p>
    </footer>
  )
}

export default Footer
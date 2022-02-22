import React from 'react'
import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <div>
     <h3>{props.title}</h3>
    </div>
  )
}

Navbar.defaultProps ={
    title:"User App"
}

export default Navbar











//
// arrow function writing
//
// const Navbar = () => {
//     return (
//         <div>
//             <h3>User App</h3>
//         </div>
//     )
// };

// export default Navbar



//
/////function writing
//
// function Navbar (){
//     return (
//         <div>
//             <h3>User App</h3>
//         </div>
//     )
// }

// export default Navbar
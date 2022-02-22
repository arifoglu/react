import React, { Component } from 'react'



class User extends Component {

  render() {

    //Destructing

  const {Name ,Departman , Salary} =this.props;

    return (
      <div>
       <ul>
         <li>Name : {Name} </li>
         <li>Departman : {Departman}</li>
         <li>Salary : {Salary}</li>
       </ul>
      </div>
    )
  }
}
 
export default  User  ;
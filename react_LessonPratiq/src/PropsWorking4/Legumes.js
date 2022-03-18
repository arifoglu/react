import React, { Component } from 'react'


// {/* <hr />
// <Legumes 
// VitaminC = "Orange"
// VitaminK = "Carrot"
// VitaminA = "Onion"
//App.js yazilabilir props ornek proje
// /> */}


class Legumes extends Component {
  render() {

    const {VitaminC, VitaminA ,VitaminK} = this.props

    return (
      
    <div>
        <li>Winter :{VitaminC}</li>
        <li>Summer :{VitaminK}</li>
        <li>Springs :{VitaminA}</li>
    </div>
     
    )
  }
}
export default Legumes ;



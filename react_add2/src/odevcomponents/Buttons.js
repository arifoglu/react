import React, { useState } from 'react'

const Buttons = () => {

    const[selected,setSelected] = useState('');

const handleClick = (e) => {
    e.preventDefault();

}


  return (
    <React.Fragment>
        <div className="form-check form-switch">
           <input onClick={handleClick} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label" for="flexSwitchCheckDefault">On/Off</label>
        </div>
        <div className="form-check form-switch">
           <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label" for="flexSwitchCheckDefault">On/Off</label>
        </div>
        <div className="form-check form-switch">
           <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label" for="flexSwitchCheckDefault">On/Off</label>
        </div>
        <div className="form-check form-switch">
           <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label" for="flexSwitchCheckDefault">On/Off</label>
        </div>
        <p>{selected}</p>
    </React.Fragment>
  )
}

export default Buttons
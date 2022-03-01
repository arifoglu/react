import React from 'react'
import { Dropdown ,DropdownButton} from 'react-bootstrap'



const Buttons = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Select City">
      <Dropdown.Item href="#/action-1">City1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">City2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">City3</Dropdown.Item>
    </DropdownButton>
  )
}

export default Buttons

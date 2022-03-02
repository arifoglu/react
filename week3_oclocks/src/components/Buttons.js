import React from 'react'
import { Col ,DropdownButton , Dropdown } from 'react-bootstrap'

const Buttons = (props) => {

    
  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <React.Fragment>
      <Col>
        <DropdownButton
          type="submit"
          onClick={handleClick}
          id="dropdown-basic-button"
          title="SELECT CITY"
        >
          <Dropdown.Item href="#/action-1">CITY1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">CITY2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">CITY3</Dropdown.Item>
        </DropdownButton>
      </Col>
    </React.Fragment>
  )
}

export default Buttons

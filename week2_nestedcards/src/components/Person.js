import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Person = ({Data}) => {
  return (

    <Col>
      PERSON
      <Card style={{ width: '18rem', height: '80rem' }}>
      <Card.Img variant="top" src={Data.map((person)=> person.avatar)} />
        <Card.Body>
          <Card.Text>FirstName: {Data.map((person) => <strong key={person.id}>  {person.first_name}  </strong>)}</Card.Text>
          <Card.Text>LastName:  {Data.map((person) => <strong key={person.id}>   {person.last_name}    </strong>)}</Card.Text>
          <Card.Text>Address:   {Data.map((person) =>  <strong key={person.id}>   {person.address}      </strong>)} </Card.Text>
          <Card.Text>Email:     {Data.map((person) =>  <strong key={person.id}>   {person.email}        </strong>)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Person

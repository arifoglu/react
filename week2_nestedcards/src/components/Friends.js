import React from 'react'
import { Container, Col, Card } from 'react-bootstrap'

const Friends = () => {
  return (
    <Container>
      <Col>
        FRIENDS
        <Card style={{ width: '40rem', height: '15rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>FirstName:</Card.Text>
            <Card.Text>LastName:</Card.Text>
            <Card.Text>Address:</Card.Text>
            <Card.Text>Email:</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  )
}

export default Friends

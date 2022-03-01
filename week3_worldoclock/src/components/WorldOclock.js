import { Container, Row, Col } from 'react-bootstrap'
import Buttons from './Buttons'
import City from './City'

const WorldOclock = () => {
  return (
    <Container>
      <Row>
        <Col>
          <City />
        </Col>
        <Col>
          <Buttons />
        </Col>
      </Row>
    </Container>
  )
}
setInterval(WorldOclock, 1000)

export default WorldOclock

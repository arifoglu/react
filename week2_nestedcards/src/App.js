import Data from './components/Data.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row ,Col } from 'react-bootstrap'
import SectionPerson from './components/SectionPerson'
import SectionChildren from './components/SectionChildren'
import SectionFriends from './components/SectionFriends'


function App({username}) {

  return (
    <div className="App">
      <Container>
        <Row>
          <SectionPerson                   Data={Data}   username={username} />
          <Col>  
            <SectionChildren               Data={Data}   username={username}  />
            <SectionFriends                Data={Data}   username={username} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App

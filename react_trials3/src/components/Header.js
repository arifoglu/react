import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


const Header = () => {
  return (
    <header >
    
    <Container>
    <Nav id="navbar" className="me-auto">
      <Nav.Link href="#home">LOGO</Nav.Link>
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
 
    </header>
  )
}

export default Header

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Button } from 'react-bootstrap';

function NavBar({setBook,setSearch}) {
  function handleSearch(e){
    setSearch(e.target.value)
  }
  
 return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"onClick={()=>setBook ("fantasy")} >fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"onClick={()=>setBook("romance")}>romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"onClick={()=>setBook("history")}>history</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"onClick={()=>setBook("horror")}>horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"onClick={()=>setBook("scifi")}>scifi</NavDropdown.Item>
              <NavDropdown.Divider />
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form className="d-flex">
    <Form.Control onChange={handleSearch} type="search" placeholder="Search" className="me-2" aria-label="Search" />
    <Button variant="outline-success">Search</Button>
  </Form>
    </Navbar>
  );
}

export default NavBar;
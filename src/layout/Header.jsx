import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-muted' >eCorp Collab Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-muted'>Stats por colaborador</Nav.Link>
            <Nav.Link href="#link" className='text-muted'>Contacto</Nav.Link>
            <NavDropdown title="Ver Más" id="basic-nav-dropdown" className='text-muted' >
              <NavDropdown.Item href="#action/3.1" className='text-muted' >Top Performers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='text-muted' >
                Empleado del Mes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='text-muted' >Damage Control</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='text-muted'>
                Asignación de proyectos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
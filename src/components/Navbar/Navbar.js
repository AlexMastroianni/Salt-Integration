import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <nav>
      <Navbar className="position-absolute top-0 start-50 translate-middle-x">
        <Container className="Nav">
          <Navbar.Brand>
            <strong>Salt Smart Home</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <li>
                <Nav.Link href="#services">Services</Nav.Link>
              </li>
              <Nav.Link href="#projects">Projects</Nav.Link>
              {/* <NavDropdown title="Links" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/AlexMastroianni">
                  Github
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/alex-mastroianni/">
                  Linkedin
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavBar;

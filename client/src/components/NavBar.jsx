import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar id="customNavBar" expand="md" bg="dark" data-bs-theme="dark">
      <Container id="custom-nav-container">
        <Row>
          <Col xs className="text-center" id="custom-brand-col">
            <Navbar.Brand className="mx-auto" id="custom-nav-brand" href="/">
              MATEO RODRIGUEZ
            </Navbar.Brand>
          </Col>
          <Col xs id="nav-link-col" className="text-end">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              id="custom-nav-hamburger"
            />
            <Navbar.Collapse id="basic-navbar-nav" className="ms-auto">
              <Nav className="ms-auto">
                <div id="custom-nav-dropdown">
                  <NavDropdown title="Merch" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Tote</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Hoodie
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      T-Shirt
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      All Merch
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <Nav.Link href="/work">Work</Nav.Link>
                <Nav.Link href="/video">Video</Nav.Link>
                <Nav.Link href="/photo">Photo</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;

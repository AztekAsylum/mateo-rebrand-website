import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import { useEffect } from "react";

const NavBar = () => {
  const { data, loading } = useQuery(QUERY_USER);
  console.log(loading);
  if (!loading) {
    console.log(data);
  }
  useEffect(() => {
    console.log(data);
  }, [loading, data]);

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
                    <NavDropdown.Item href="/products/tote">
                      Tote
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/products/hoodie">
                      Hoodie
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/products/tshirt">
                      T-Shirt
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/products/all">
                      All Merch
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <Nav.Link href="/work">Work</Nav.Link>
                <Nav.Link href="/video">Video</Nav.Link>
                <Nav.Link href="/photo">Photo</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/authorization">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;

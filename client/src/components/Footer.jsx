import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container
      id="footerDiv"
      className="mb-0 p-0"
      fluid
      bg="dark"
      data-bs-theme="dark"
    >
      <Row>
        <Col xs={12} md={3} id="marquee-col">
          <marquee>bark like you want it</marquee>
        </Col>
        <Col className="text-end">
          <Link to="/contact">mateorodriguezarte@gmail.com</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

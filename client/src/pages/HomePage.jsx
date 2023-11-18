import { Container, Row, Col } from "react-bootstrap";
import Wrapper from "../components/VideoWrapper";

const Home = () => {
  return (
    <Wrapper>
      <Container id="HomePageContainer">
        <Row className="">
          <Col xs={12} className="mx-auto">
            <p className="display-1 mx-auto text-center">Home Page</p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Home;

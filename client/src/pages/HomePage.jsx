import { Container, Row, Col } from "react-bootstrap";
import Wrapper from "../components/VideoWrapper";

const Home = () => {
  return (
    <Wrapper>
      <Container id="HomePageContainer">
        <Row className="">
          <Col xs={12} className="mx-auto text-white">
            <p className="display-0 mx-auto text-center">
              Front End Developer, earning praise for his creative flair merging
              graphic design finesse with a skill for crafting polished and
              captivating front-end interfaces. Rooted in graphic design and
              honed expertise, he curates exceptional content tailored for
              promotions and engaging audiences. Proficient across graphic
              design, photography, and videography, Mateo produces unique and
              compelling material. His greatest strengths shine in
              collaboration, displaying a strong work ethic and adaptability
              throughout the creative process.
            </p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Home;

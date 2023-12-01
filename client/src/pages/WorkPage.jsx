import { Container, Row, Col, Carousel } from "react-bootstrap";

const Work = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={10} className="mx-auto">
          <h1 className="text-center pt-3 pb-2">WORK</h1>
          <Carousel
            data-bs-theme="dark"
            indicators={false}
            pause={false}
            // variant="dark"
          >
            <Carousel.Item>
              <img
                className="d-block w-100 CustomRounded"
                src="/Assets/Images/IG_Mock.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 CustomRounded"
                src="/Assets/Images/IG_Mock2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 CustomRounded"
                src="/Assets/Images/IG_Mock.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;

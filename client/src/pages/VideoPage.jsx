import { Container, Row, Col, Card } from "react-bootstrap";

const Video = () => {
  return (
    <Container
      id="videoContainer"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Row className="text-center pt-3">
        <h2>Video Page</h2>
      </Row>
      <Row className="flex-fill">
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={4}
          className="mx-auto d-flex flex-column justify-content-center pb-2"
        >
          <video
            className="w-100 mx-auto"
            src="https://mateorodriguezarte.s3.us-east-2.amazonaws.com/MHShowDown.mp4"
            controls
          ></video>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={4}
          className="mx-auto d-flex flex-column justify-content-center pb-2"
        >
          <video
            className="w-100"
            src="https://mateorodriguezarte.s3.us-east-2.amazonaws.com/MHShowDown.mp4"
            controls
          ></video>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={4}
          className="mx-auto d-flex flex-column justify-content-center pb-2"
        >
          <video
            className="w-100"
            src="https://mateorodriguezarte.s3.us-east-2.amazonaws.com/MHShowDown.mp4"
            controls
          ></video>
        </Col>
      </Row>
    </Container>
  );
};

export default Video;

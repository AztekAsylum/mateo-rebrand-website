import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  const { _id, name, description, price, quantity, images, category } =
    props.product;

  const hoverHandler = (e) => {
    if (images[1]) {
      e.target.src = images[1];
    }
  };

  const exitHandler = (e) => {
    if (images[0]) {
      e.target.src = images[0];
    }
  };

  return (
    <Container>
      <Card className="card border-0">
        <Card.Img
          onMouseEnter={hoverHandler}
          onMouseLeave={exitHandler}
          variant="top"
          src={images[0]}
        />
        <Card.Body className="text-black ">
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text className="text-center">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center FooterCard border-0">
          <Row>
            <Col xs={10} md={8} lg={6} className="mx-auto">
              <Button className="mx-auto" variant="dark">
                ADD TO CART
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ProductCard;

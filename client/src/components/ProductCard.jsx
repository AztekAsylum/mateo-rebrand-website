import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  const { _id, name, description, price, quantity, images, category } =
    props.product;
  return (
    <>
      <Card>
        <Card.Img variant="top" src={images[0]} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Add To Cart</Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProductCard;

import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  const { _id, name, description, price, quantity, images, category } =
    props.product;
  return (
    <>
      <Card>
        <Card.Img variant="top" src={images[0]} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text className="text-center">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button
            variant="dark"
            style={{
              width: "50%",
            }}
          >
            ADD TO CART
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ProductCard;

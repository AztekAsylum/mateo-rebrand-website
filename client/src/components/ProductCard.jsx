import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  const { _id, name, description, price, quantity, images, category } =
    props.product;
  return (
    <>
      <Card className="card border-0">
        <Card.Img variant="top" src={images[0]} />
        <Card.Body className="text-black ">
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text className="text-center">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center FooterCard border-0">
          <Button
            variant="dark"
            style={{
              width: "35%",
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

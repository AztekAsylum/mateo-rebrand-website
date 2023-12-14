import { Container, Row } from "react-bootstrap";

const CartItem = ({ size, quantity, product }) => {
  return (
    <>
      <Container className="detailContainer">
        <img className="CartImg" src={product.images[0]} />
        <Row className="ps-3 pt-2">
          <h6>Cart Item</h6>
          <h6>size:{size}</h6>
          <h6>quantity:{quantity}</h6>
          <h6>product:{product.name}</h6>
        </Row>
      </Container>
    </>
  );
};

export default CartItem;

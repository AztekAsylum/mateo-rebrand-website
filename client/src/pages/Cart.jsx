import { Button, Container, Row, Col } from "react-bootstrap";
import CartItem from "../components/CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

const Cart = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const localCart = JSON.parse(localStorage.getItem("cartArr"));
  const cart = localCart?.length ? localCart : [];
  console.log(cart);

  const stripePromise = loadStripe("pk_test_dPxHyGIFbeL8jrpFwj5X47Xb");

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function submitCheckout() {
    console.log(cart);
    const checkoutCart = [];
    cart.forEach((element) => {
      const checkoutItem = {
        price: element.product.sizes[0].price_id,
        quantity: element.quantity,
      };
      checkoutCart.push(checkoutItem);
    });
    console.log(checkoutCart);
    getCheckout({
      variables: {
        products: [...checkoutCart],
      },
    });
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h1 className="text-center">Cart</h1>
          {cart.map((product) => (
            <CartItem
              size={product.size}
              quantity={product.quantity}
              product={product.product}
            />
          ))}
          <div className="justify-content-center d-flex">
            <Button onClick={submitCheckout} className="btn-dark">
              Checkout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

// add empty cart button

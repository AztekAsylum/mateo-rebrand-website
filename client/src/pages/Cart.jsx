import CartItem from "../components/CartItem";

const Cart = () => {
  const localCart = JSON.parse(localStorage.getItem("cartArr"));
  const cart = localCart?.length ? localCart : [];
  console.log(cart);
  return (
    <>
      <h1 className="text-center">Cart</h1>
      {cart.map((product) => (
        <CartItem size= {product.size} quantity = {product.quantity} product = {product.product}/>
      ))}
    </>
  );
};

export default Cart;

// add empty cart button 
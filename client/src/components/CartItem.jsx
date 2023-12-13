const CartItem = ({ size, quantity, product }) => {
  return (
    <>
      <h3>Cart Item</h3>
      <h5>size:{size}</h5>
      <h5>quantity:{quantity}</h5>
      <h5>product:{product.name}</h5>
      <img className="CartImg" src={product.images[0]} />
    </>
  );
};

export default CartItem;

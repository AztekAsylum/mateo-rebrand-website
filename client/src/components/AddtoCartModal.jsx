import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddtoCartModal = ({
  showModal,
  setShowModal,
  product,
  selectedSize,
  setSelectedSize,
}) => {
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log(
      `Size: ${selectedSize}, Quantity: ${quantity}, Product: ${product._id}, ${product.sizes[0].price_id}`
    );

    const localCart = JSON.parse(localStorage.getItem("cartArr"));
    const cart = localCart?.length ? localCart : [];

    if (
      cart.some((e) => e.product._id === product._id && e.size === selectedSize)
    ) {
      console.log("containsIt");
      const index = cart.findIndex(
        (e) => e.product._id === product._id && e.size === selectedSize
      );
      cart[index].quantity += quantity;
    } else {
      cart.push({ size: selectedSize, quantity: quantity, product: product });
    }
    localStorage.setItem("cartArr", JSON.stringify(cart));

    handleClose();

    navigate("/cart");
  };

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleClose}
        dialogClassName="modern-modal"
        data-bs-theme="dark"
      >
        <Modal.Header className="modalBackColor" closeButton>
          <Modal.Title className="text-white">SHOPPING BAG</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBackColor">
          <Form onSubmit={handleSubmit}>
            <h3 className="text-white">{product.name}</h3>
            {product?.sizes?.length > 1 ? (
              <Form.Group controlId="sizeSelect">
                <Form.Label className="text-white">Select Size</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="modalBackColor text-white"
                  defaultValue={selectedSize}
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </Form.Control>
              </Form.Group>
            ) : null}
            <Form.Group controlId="quantityInput">
              <Form.Label className="text-white">Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min={1}
                className="modalBackColor text-white"
              />
            </Form.Group>
            <div className="float-end pt-3">
              <Button variant="secondary" type="submit">
                Add to bag
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddtoCartModal;

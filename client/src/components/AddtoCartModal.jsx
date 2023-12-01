import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddtoCartModal = ({
  showModal,
  setShowModal,
  product,
  selectedSize,
  setSelectedSize,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log(
      `Size: ${selectedSize}, Quantity: ${quantity}, Product: ${product._id}`
    );
    handleClose();
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
                Proceed To Checkout
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddtoCartModal;

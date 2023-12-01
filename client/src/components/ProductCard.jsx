import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const ProductCard = (props) => {
  const { _id, name, description, price, sizes, images, category } =
    props.product;

  const { setShowModal, setSelectedSize, setProductModal } = props;

  const [selectedSizeProduct, setSelectedSizeProduct] = useState("Select Size");

  useEffect(() => {
    if (!sizes.length > 1) {
      setSelectedSizeProduct(sizes[0].size);
    }
  }, []);

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

  const handleSelectSize = (e) => {
    console.log(e.target.innerHTML);
    setSelectedSizeProduct(e.target.innerHTML);
  };

  const handleAddtoCart = (e) => {
    setSelectedSize(selectedSizeProduct);
    setProductModal(props.product);
    setShowModal(true);
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
              <Button
                className="mx-auto"
                variant="dark"
                onClick={handleAddtoCart}
              >
                ADD TO CART
              </Button>
            </Col>
            {sizes.length > 1 ? (
              <Col>
                <ButtonGroup>
                  <DropdownButton
                    as={ButtonGroup}
                    title={selectedSizeProduct}
                    className="dropDownColor"
                    variant="secondary"
                    menuVariant="dark"
                  >
                    {sizes.map((e) => {
                      return (
                        <Dropdown.Item
                          key={uuidv4()}
                          onClick={handleSelectSize}
                        >
                          {e.size}
                        </Dropdown.Item>
                      );
                    })}
                  </DropdownButton>
                </ButtonGroup>
              </Col>
            ) : null}
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ProductCard;

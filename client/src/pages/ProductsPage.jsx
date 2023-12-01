import { useEffect, useState } from "react";
import { QUERY_PRODUCTS, QUERY_CATEGORIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import AddtoCartModal from "../components/AddtoCartModal";

const Products = () => {
  const { category } = useParams();

  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: { category: category },
  });

  const [categoryArray, setCategoryArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState("Select Size");
  const [productModal, setProductModal] = useState({});

  const handleShow = () => setShowModal(true);

  const formatCategory = (e) => {
    let output = "";
    switch (e) {
      case "tshirt":
        output = "T-SHIRT";
        break;
      case "hoodie":
        output = "HOODIE";
        break;
      case "tote":
        output = "TOTE";
        break;
      default:
        output = e;
        break;
    }
    return output;
  };

  const getCategories = async (arr) => {
    const outputArray = [];
    await arr.map((e) => {
      if (!outputArray.includes(e.category)) {
        outputArray.push(e.category.name);
      }
    });

    await setCategoryArray(outputArray);
    console.log(categoryArray);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      getCategories(data.products);
    }
  }, [loading, data]);

  console.log(selectedSize, productModal);

  return (
    <Container className="text-center" key="merch">
      <h2></h2>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        categoryArray.map((category, i) => {
          return (
            <>
              <Row className="border-top border-1 border-light-subtle pt-3">
                <h3 key={`category${i}`}>{formatCategory(category)}</h3>
              </Row>
              <Row>
                {data.products.map((product) => {
                  let sameCategory = true;
                  if (category !== product.category.name) {
                    sameCategory = false;
                  }
                  return sameCategory ? (
                    // <h3 key={product._id}>{product.name}</h3>
                    <Col xs={12} md={10} lg={6} xl={4} className="mx-auto pb-4">
                      <ProductCard
                        product={product}
                        setSelectedSize={setSelectedSize}
                        setShowModal={setShowModal}
                        setProductModal={setProductModal}
                      />
                    </Col>
                  ) : null;
                })}
              </Row>
            </>
          );
        })
      )}
      <AddtoCartModal
        setShowModal={setShowModal}
        showModal={showModal}
        product={productModal}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </Container>
  );
};

export default Products;

import { useEffect, useState } from "react";
import { QUERY_PRODUCTS, QUERY_CATEGORIES } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  const { category } = useParams();
  console.log(category);

  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: { category: category },
  });

  const [categoryArray, setCategoryArray] = useState([]);

  const formatCategory = (e) => {
    console.log(e);
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
    // outputArray.map((e) => {
    //   if (e.category.name === "tshirt") {
    //     e.category.name = "t-shirt";
    //   }
    // });
    await setCategoryArray(outputArray);
    console.log(categoryArray);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      getCategories(data.products);
      // setCategoryArray(getCategories(data.products));
      // console.log(categoryArray);
      // console.log(products);
    }
  }, [loading, data]);

  return (
    <Container className="text-center" key="merch">
      <h2>PRODUCTS</h2>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        categoryArray.map((category, i) => {
          return (
            <>
              <Row className="border-top border-5 border-dark-subtle pt-2">
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
                      <ProductCard product={product} />
                    </Col>
                  ) : null;
                })}
              </Row>
            </>
          );
        })
      )}
    </Container>
  );
};

export default Products;

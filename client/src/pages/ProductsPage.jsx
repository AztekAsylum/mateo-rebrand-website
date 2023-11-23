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
      // setCategoryArray(getCategories(data.products));
      // console.log(categoryArray);
      // console.log(products);
    }
  }, [loading, data]);

  return (
    <Container key="merch">
      <h1>Product Page</h1>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        categoryArray.map((category, i) => {
          return (
            <>
              <h2 key={`category${i}`}>{category}</h2>
              <Row>
                {data.products.map((product) => {
                  let sameCategory = true;
                  if (category !== product.category.name) {
                    sameCategory = false;
                  }
                  return sameCategory ? (
                    // <h3 key={product._id}>{product.name}</h3>
                    <Col xs={4}>
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

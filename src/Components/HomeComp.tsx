import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const HomeComp: React.FC = () => {
  const fetchProducts = async () => {
    const url = "https://fakestoreapi.com/products";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        console.log("data :>> ", products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1>Product List</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ marginBottom: "15px",padding : "10px" }}>
              <div>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "18rem", height: "18rem" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{product.title.slice(0, 20) + "..."}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button
                  as={Link}
                  to={`/product/${product.id}`}
                  variant="primary"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeComp;

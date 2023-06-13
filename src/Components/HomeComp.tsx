import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { RootState } from "../Redux/rootReducer";
import { setProducts, showProduct, addToCart } from "../Redux/cartActions";
import Slider from "./Common/Slider/Slider";

const HomeComp: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const productState = useSelector((state: RootState) => state.cart.products);
  const selectedProduct = useSelector((state: RootState) => state.cart.items);
  const productId = Object.keys(selectedProduct)[0];
  const product = selectedProduct[productId];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        dispatch(setProducts(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (product: any) => {
    dispatch(showProduct(product));
    navigate(`/product-details/${product.id}`);
  };

  return (
    <>
       <Slider />
      <Container>
        <h1>Product List</h1>
        <Row>
          {Object.values(productState).map((product: any) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  boxShadow: "0 0 3px grey",
                }}
              >
                <div>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{
                      width: "18rem",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{product.title.slice(0, 20) + "..."}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <div className="d-flex align-items-center justify-content-between">
                    <Button
                      variant="outline-primary"
                      onClick={() => handleProductClick(product)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outline-warning"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeComp;

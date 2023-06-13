import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/rootReducer";
import { Link, useNavigate } from "react-router-dom";
import { removeOneCart, removeFromCart, addToCart } from "../Redux/cartActions";
import { RiDeleteBin2Fill } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartComp = () => {
  const carts = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = carts?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className=" py-3 container">
      <div className="row">
        <h2 className="my-5">CART ITEMS</h2>
        <div className="col-md-8">
          {carts?.length > 0 ? (
            carts?.map((product) => (
              <Card
                key={product.id}
                style={{ width: "50rem", marginBottom: "20px" }}
              >
                <div className="row">
                  <div className="col-md-4">
                    <Card.Img
                      style={{ width: "20rem", height: "13rem" }}
                      variant="top img-fluid"
                      src={product?.image}
                    />
                  </div>
                  <div className="col-md-8">
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text> {product.price}</Card.Text>
                      <div className="d-flex align-items-center justify-content-between">
                        <Card.Text>Quantity: {product.quantity}</Card.Text>
                        <div className="d-flex align-items-center justify-content-between shadow counter">
                          <Button
                            variant="outline-primary mx-2"
                            onClick={() => dispatch(removeOneCart(product.id))}
                          >
                            <AiOutlineMinus />
                          </Button>
                          <div>
                            <span>{product.quantity}</span>
                          </div>
                          <Button
                            variant="outline-primary mx-2"
                            onClick={() => dispatch(addToCart(product))}
                          >
                            <AiOutlinePlus />
                          </Button>
                        </div>
                        <Button
                          onClick={() => dispatch(removeFromCart(product.id))}
                          variant="outline-danger mx-2"
                        >
                          <RiDeleteBin2Fill />
                        </Button>
                      </div>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div>
              <p className="d-flex align-items-center justify-content-center">
                No Products Available
              </p>
            </div>
          )}
        </div>
        <div className="col-md-3">
          <h3 className="my-2">Price Details</h3>
          <div className="row">
            {carts?.map((product) => (
              <>
                <div key={product.id} className="col-md-9 ">
                  <Card.Text>{product.title}</Card.Text>
                </div>

                <div className="col-md-3">
                  <Card.Text>{product.price * product.quantity}</Card.Text>
                </div>
              </>
            ))}
          </div>
          <hr />
          <div className="row my-2">
            <div className="col-md-9 ">
              <Card.Text>Total</Card.Text>
            </div>
            <div className="col-md-3 ">
              <Card.Text>{totalPrice.toFixed(2)}</Card.Text>
            </div>
          </div>
          <div className="d-grid gap-2">
            <Link to={"/"}>
              <button
                onClick={() => {
                  carts.length = 0;
                  navigate("/");
                }}
                className="btn btn-outline-warning"
                type="button"
              >
                CONFIRM ORDER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;

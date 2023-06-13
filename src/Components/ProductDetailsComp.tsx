import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/rootReducer";

const ProductDetailsComp = () => {
  const selectedProduct = useSelector((state: RootState) => state.cart.items);

  console.log("selectedProduct :>> ", selectedProduct);

  if (!selectedProduct) {
    return <div>No product selected</div>;
  }

  const productId = Object.keys(selectedProduct)[0];
  const product = selectedProduct[productId];

  return (
    <div className="px-5">
      <div key={product.id} className="row">
        <div className="col-md-4 p-3">
          <div>
            <img
              src={product.image}
              className="img-fluid"
              style={{ height: "50vh", width: "100%" }}
            />
          </div>
        </div>
        <div className="col-md-8 p-5">
          <p className="fw-bold">{product.title}</p>
          <p className="fw-bold">{product.description}</p>
          <p className="fw-bold">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsComp;

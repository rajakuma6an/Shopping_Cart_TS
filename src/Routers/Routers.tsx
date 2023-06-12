import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';



const Routers = () => {
  return (
    <div>
      <div>
        <React.Suspense fallback={"...Loading"}>
          <Router>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/product-details/:id" element={<ProductDetails />} />
                <Route path="/cart/:id" element={<Cart />} />
              </Route>
            </Routes>
          </Router>
        </React.Suspense>
      </div>
    </div>
  );
};

export default Routers;

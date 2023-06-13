import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../Redux/rootReducer";

const NavBar = () => {
  const navigate = useNavigate();
  const carts = useSelector((state: RootState) => state.cart.cart);
  return (
    <>
      <div className="navbar bg-dark text-light d-flex align-items-center justify-content-between px-5 py-3">
        <h5 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Shopping_Cart
        </h5>

        <div className="d-flex align-items-center justify-content-between gap-3">
          <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            Home
          </p>
          <div style={{ cursor: "pointer" }} onClick={() => navigate("/cart")}>
            <p>
              Cart<span>&nbsp;&nbsp;{carts.length}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
    
      </div>
    </>
  );
};

export default NavBar;

const NavBar = () => {
  return (
    <div className="navbar bg-dark text-light d-flex align-items-center justify-content-between px-5 py-3">
      <h5>Shopping_Cart</h5>
      
      <div className="d-flex align-items-center justify-content-between gap-3">
        <p>Home</p>
        <p>Products</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default NavBar;

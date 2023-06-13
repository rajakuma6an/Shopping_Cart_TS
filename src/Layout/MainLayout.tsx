import { Outlet } from "react-router-dom";
import NavBar from "../Components/Common/NavBar/NavBar";
import Footer from "../Components/Common/Footer/Footer";
import './style.css'
const MainLayout = () => {
  return (
    <div className="main-layout">
      <div >
        <NavBar />
      </div>
      <div className="content-wrapper">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

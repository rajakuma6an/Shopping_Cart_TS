import { Outlet } from "react-router-dom";
import NavBar from "../Components/Common/NavBar/NavBar";
import Footer from "../Components/Common/Footer/Footer";
const MainLayout = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

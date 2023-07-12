import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
}

export default MainLayout;

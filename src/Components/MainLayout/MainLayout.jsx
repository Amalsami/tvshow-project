import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout({ userData, logout }) {
  console.log(userData);
  return (
    <div>
      <NavBar userData={userData} logout={logout} ></NavBar>
      <Outlet></Outlet>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default MainLayout;

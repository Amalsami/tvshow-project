import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout(props) {
  console.log(props);
  return (
    <div>
      <NavBar userData={props.userData}></NavBar>
      <Outlet></Outlet>

      {/* <Footer></Footer> */}
    </div>
  );
}

export default MainLayout;

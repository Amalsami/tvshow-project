import "./App.css";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register.jsx";
import Login from "./Components/Login/Login.jsx";
import Movies from "./Components/Movies/Movies.jsx";
import TvShows from "./Components/TvShows/TvShows.jsx";
import About from "./Components/About/About.jsx";
import People from "./Components/People/People.jsx";
import Network from "./Components/Network/Network.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout.jsx";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Loading from "./Components/Loading/Loading";
import Details from "./Components/Details/Details";

function App() {
  let [userData, setUserData] = useState({});
  function saveUser() {
    let token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    setUserData(decoded);
    console.log(decoded);
  }
  //check if there is token or not
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUser();
    }
  }, []);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout userData={userData}></MainLayout>,
      children: [
        { path: "home", element: <Home /> },
        { path: "register", element: <Register></Register> },
        { path: "login", element: <Login saveUser={saveUser}></Login> },
        { path: "movies", element: <Movies></Movies> },
        { path: "tvShows", element: <TvShows></TvShows> },
        { path: "about", element: <About></About> },
        { path: "network", element: <Network /> },
        { path: "people", element: <People /> },
        { path: "loading", element: <Loading /> },
        { path: "details/:id/:type", element: <Details /> },
        { path: "*", element: <NotFound></NotFound> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;

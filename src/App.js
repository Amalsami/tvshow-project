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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "home", element: <Home /> },
      { path: "register", element: <Register></Register> },
      { path: "login", element: <Login></Login> },
      { path: "movies", element: <Movies></Movies> },
      { path: "tvShows", element: <TvShows></TvShows> },
      { path: "about", element: <About></About> },
      { path: "network", element: <Network /> },
      { path: "people", element: <People /> },
      { path: "*", element: <NotFound></NotFound> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;

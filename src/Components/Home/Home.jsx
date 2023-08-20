import Card from "../Card/Card.jsx";
import axios from "axios"
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading.jsx";


function Home() {
  const [movies, setMovies] = useState([])
  const [tv, setTv] = useState([])
  const [loading, setLoading] = useState(true)
  async function getTrending(type, setdata) {
    const data = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=62b0fc4666a7121de866ed1aa6ce36d7`)

    setdata(data.data.results)
    setLoading(false)
    console.log(data.data.results);
  }

  useEffect(() => {
    getTrending("movie", setMovies)
    getTrending("tv", setTv)
  })
  return (
    <div className="container">
      {loading ? <Loading></Loading> :
        <>
          <div className="row">
            <div className="col-4">
              <div className=" content d-flex justify-content-center h-100 flex-column">
                <h2 className=" position-relative"> Trending <br></br> movies <br></br> to watch</h2>
                <p className="">Watch them now on our app</p>
              </div>
            </div>
            {movies?.slice(0, 10).map((movie) => <Card movie={movie}></Card>)}
          </div>
          <div className="row">
            <div className="col-4">
              <div className=" content d-flex justify-content-center h-100 flex-column">
                <h2 className=" position-relative"> Trending <br></br> TV <br></br> to watch</h2>
                <p className="">Watch them now on our app</p>
              </div>
            </div>
            {tv?.slice(0, 10).map((tv) => <Card movie={tv}></Card>)}
          </div>
        </>}

    </div>
  );
}

export default Home;

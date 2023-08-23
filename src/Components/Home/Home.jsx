import Card from "../Card/Card.jsx";
import axios from "axios"
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading.jsx";
import { Offline } from "react-detect-offline";
import DetectOffline from "../DetectOffline/DetectOffline.jsx";
import getTrending from "../ApiService/ApiService.jsx";



function Home() {
  const [movies, setMovies] = useState([])
  const [tv, setTv] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const tv = await getTrending("tv")
      const movie = await getTrending("movie")
      setMovies(movie)
      setTv(tv)
      // console.log(movie, tv);
      setLoading(false)
    }
    fetchData()
  }, [])
  return (
    <div className="container py-5">
      <Offline><DetectOffline></DetectOffline></Offline>
      {loading ? <Loading></Loading> :
        <>
          <div className="row">
            <div className="col-4">
              <div className=" content d-flex justify-content-center h-100 flex-column">
                <h2 className=" position-relative"> Trending <br></br> movies <br></br> to watch</h2>
                <p className="">Watch them now on our app</p>
              </div>
            </div>
            {movies?.slice(0, 10).map((movie) => <Card movie={movie} key={movie.id}></Card>)}
          </div>
          <div className="row">
            <div className="col-4">
              <div className=" content d-flex justify-content-center h-100 flex-column">
                <h2 className=" position-relative"> Trending <br></br> TV <br></br> to watch</h2>
                <p className="">Watch them now on our app</p>
              </div>
            </div>
            {tv?.slice(0, 10).map((tv) => <Card movie={tv} key={tv.id}></Card>)}
          </div>
        </>}

    </div>
  );
}

export default Home;

import { useEffect, useState } from "react";
import getTrending from "../ApiService/ApiService";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";


function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function fetchData() {
      const movie = await getTrending("movie")
      setMovies(movie)
      setLoading(false)
      // console.log(movie);
    }
    fetchData()
  }, [])
  return <div className="container py-5">
    {loading ? <Loading></Loading> :
      <>
        <div className="row">
          {movies?.map((movie) => <Card movie={movie}></Card>)}
        </div>
      </>}

  </div>;
}

export default Movies;

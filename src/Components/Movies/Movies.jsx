import { useEffect, useState } from "react";
import { getPopular } from "../ApiService/ApiService";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";


function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  let pages = new Array(10).fill(0).map((ele, i) => i + 1)
  console.log(movies);


  useEffect(() => {
    async function fetchData() {
      const movie = await getPopular("movie", 1)
      setMovies(movie)
      setLoading(false)

    }
    fetchData()
  }, [])
  async function onPagination(page) {
    const movie = await getPopular('movie', page);
    setMovies(movie);
  }
  return <div className="container py-5">
    {loading ? <Loading></Loading> :
      <>
        <div className="row">
          {movies?.map((movie) => <Card movie={movie} mediaType={"movie"} key={movie.id}></Card>)}
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination d-flex justify-content-center">
            {pages.map((ele) =>
              <li className="page-item" onClick={() => onPagination(ele)} >
                <a className="page-link" >{ele}</a>
              </li>)}

          </ul>
        </nav>
      </>}

  </div>;
}

export default Movies;

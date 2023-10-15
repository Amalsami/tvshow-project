import { useEffect, useState } from "react";
import getTrending, { getPopular } from "../ApiService/ApiService";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";

function TvShows() {
  const [tvs, setTvs] = useState([])
  const [loading, setLoading] = useState(true)
  let pages = new Array(10).fill(0).map((ele, i) => i + 1)

  useEffect(() => {
    async function fetchData() {
      const tv = await getPopular("tv", 1)
      setTvs(tv)
      setLoading(false)
    }
    fetchData()
  }, [])
  async function onPagination(page) {
    const movie = await getPopular('tv', page);
    setTvs(movie);
  }
  return <div className="container py-5">
    {loading ? <Loading></Loading> :
      <>
        <div className="row">
          {tvs?.map((tv) => <Card movie={tv} mediaType={"tv"} key={tv.id}></Card>)}
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

export default TvShows;

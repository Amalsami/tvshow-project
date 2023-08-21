import { useEffect, useState } from "react";
import getTrending from "../ApiService/ApiService";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";

function TvShows() {
  const [tvs, setTvs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const tv = await getTrending("tv")
      setTvs(tv)
      setLoading(false)
      console.log(tv);
    }
    fetchData()
  }, [])
  return <div className="container py-5">
    {loading ? <Loading></Loading> :
      <>
        <div className="row">
          {tvs?.map((tv) => <Card movie={tv}></Card>)}
        </div>
      </>}

  </div>;
}

export default TvShows;

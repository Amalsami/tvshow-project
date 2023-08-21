import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading";

function Details() {
  const { id, type } = useParams()
  const [details, setDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  console.log(id);
  async function getDetails() {
    const data = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=62b0fc4666a7121de866ed1aa6ce36d7`)
    console.log(data);
    setDetails(data)
    setLoading(false)

  }
  useEffect(() => {
    getDetails()
  }, [])
  return (
    <div className="container py-5">
      {loading ? <Loading></Loading> :
        <>
          {details && <div className="row">
            <div className="col-md-3">
              <img src={"https://image.tmdb.org/t/p/w500" + details?.data.poster_path
              } className="w-100" alt="" />
            </div>
            <div className="col-md-9">
              <div className="item">
                <h1>{details?.data.title} {details?.data.name}</h1>
                <h5>{details?.data.tagline}</h5>
                <ul className="list-unstyled d-flex">
                  {details?.data.genres.map(genre => <li key={genre.id} className="bg-info p-2 mx-1 rounded-4">{genre.name}</li>)}
                </ul>
                <p>vote : {details?.data.vote_average.toFixed(1)}</p>
                <p>vote count : {details?.data.vote_count}</p>
                <p>popularity : {details?.data.popularity}</p>
                <p>release date : {details?.data.release_date}  {details?.data.first_air_date}</p>
                <h5>{details?.data.overview}</h5>
              </div>
            </div>
          </div>}
        </>}

    </div >
  )
}

export default Details

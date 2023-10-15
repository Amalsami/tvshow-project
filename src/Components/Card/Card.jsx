import { Link } from "react-router-dom";

function Card({ movie, mediaType }) {
  return (

    <div className="col-md-2 position-relative ">
      <div className="item position-relative overflow-hidden">
        <img src={"https://image.tmdb.org/t/p/w500" +
          movie?.poster_path
        } className="w-100" alt="" />
        <Link to={`/details/${+movie.id}/${movie.media_type || mediaType}`}>
          <div className="overlay p-2 text-center text-white">
            {movie?.overview.split(" ").splice(0, 18).join(" ")}...
          </div>
        </Link>
      </div>
      <h5>{movie.title} {movie.name}</h5>
      <div className="vote bg-info p-2 position-absolute top-0 end-0 rounded">{movie.vote_average.toFixed(1)}</div>
    </div>

  )
}

export default Card

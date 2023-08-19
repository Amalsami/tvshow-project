function Card({ movie }) {
  console.log(movie);
  return (

    <div className="col-md-2 position-relative ">
      <div className="item position-relative overflow-hidden">
        <img src={"https://image.tmdb.org/t/p/w500" +
          movie.poster_path
        } className="w-100" alt="" />
        <div className="overlay p-2 text-center">
          {movie.overview.split(" ").splice(0, 18).join(" ")}...
        </div>
      </div>
      <h4>{movie.title} {movie.name}</h4>
      <div className="vote bg-info p-2 position-absolute top-0 end-0 ">{movie.vote_average.toFixed(1)}</div>
    </div>

  )
}

export default Card

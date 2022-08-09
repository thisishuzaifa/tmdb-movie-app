import { Link } from "react-router-dom";
import noPoster from "../images/no-movie-poster.jpg";
import { useState, useEffect } from "react";

function MovieCard({ movie }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkLiked = async () => {
      localStorage.getItem(`${movie?.id}`) ? setLiked(true) : setLiked(false);
    };
    checkLiked();
  }, [movie]);

  const handleLike = () => {
    setLiked(!liked);
    liked
      ? localStorage.removeItem(`${movie.id}`)
      : localStorage.setItem(`${movie.id}`, JSON.stringify(movie));

   
    window.location.reload();
  };
  return (
    <div className="card-container">
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <div className="movie-poster">
          {movie.poster_path === null ? (
            <img src={noPoster} alt="No poster available." />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </div>
      </Link>

      <div className="likebutton">
        <div>
          <button
            className={liked ? "btn btn-danger" : "btn btn-primary"}
            onClick={handleLike}
          >
            {liked ? "Liked" : "Like"}
          </button>
          
        </div>
        <div>
          <Link to={`/movie/${movie.id}`}>
            <h3>{movie.title}</h3>
          </Link>
        </div>
      </div>
      <h4>{movie.tagline}</h4>
      <p>Realease Date: {movie.release_date}</p>
      <p>Movie Rating: {movie.vote_average}</p>
    </div>
  </div>
  );
}

export default MovieCard;

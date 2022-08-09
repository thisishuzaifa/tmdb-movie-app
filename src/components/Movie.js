import React from "react";
import noPoster from "../images/no-movie-poster.jpg";
import { useState, useEffect } from "react";

export default function Movie({ movie }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const checkLiked = async () => {
      localStorage.getItem(`${movie?.id}`) ? setLiked(true) : setLiked(false);
    };
    checkLiked();
  }, [movie]);

  const handleLike = () => {
    console.log(movie);
    setLiked(!liked);
    liked
      ? localStorage.removeItem(`${movie.id}`)
      : localStorage.setItem(`${movie.id}`, JSON.stringify(movie));
  };

  return (
    <>
      {movie ? (
        <div className="p-3">
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
          <div className="d-flex movie-info flex-column">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <h1>{movie.title}</h1>
                <h4>{movie.tagline}</h4>
              </div>

              <div className="likebutton">
                <button
                  className={liked ? "btn btn-danger" : "btn btn-primary"}
                  onClick={handleLike}
                >
                  {liked ? "Liked" : "Like"}
                </button>
              </div>
            </div>
            
            <p>Rating: {movie.vote_average}</p>
            <p>Runtime: {movie.runtime}</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      ) : (
        <h1>waiting</h1>
      )}
    </>
  );
}

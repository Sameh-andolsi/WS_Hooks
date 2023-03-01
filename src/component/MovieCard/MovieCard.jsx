import React from 'react'
import ReactStars from "react-stars";
import "./MovieCard.css";
const MovieCard = ({movie}) => {
  return (
    <div>
      <div className="container">
        <h1 className="titre">{movie.title} </h1>
        <img src={movie.posterURL} alt={movie.title} className="image" />
        <h5 className="desc"> {movie.description}</h5>
        <ReactStars
          className="stars"
          count={5}
          edit={false}
          half={false}
          value={movie.rating}
          size={24}
          color2={"#ffd700"}
        />
      </div>
    </div>
  );
}

export default MovieCard
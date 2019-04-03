import React from "react";
import "./styles.scss";

import MovieCard from "./MovieCard";

const MovieList = ({ movieList }) => {
  let list = null;
  if (movieList) {
    list = movieList.map(movie => <MovieCard {...movie} key={movie.id} />);
  }
  return <div className="movie-list">{list}</div>;
};

export default MovieList;

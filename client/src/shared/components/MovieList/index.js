import React from 'react';
import './styles.scss';

import MovieCard from './MovieCard';

const MovieList = ({ movieList = [] }) => (
  <div className='movie-list'>
    {movieList.map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
);

export default MovieList;

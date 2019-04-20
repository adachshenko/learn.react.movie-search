import React from 'react';

import MovieList from '../../shared/components/MovieList';
import MovieDetails from '../MovieDetailsPage/MovieDetails';
import {movieList} from '../../mock-data.json';

class MovieDetailsPage extends React.Component {
  state = { movieList };

  render() {
    return (
      <div className='movie-page'>
        <MovieDetails {...this.state.movieList[0]} />
        <MovieList movieList={this.state.movieList} />
      </div>
    );
  }
}

export default MovieDetailsPage;

import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './styles.scss';

const MovieDetails = ({
  image,
  title,
  year,
  genre,
  description,
  duration,
  rating
}) => {
  return (
    <React.Fragment>
      <Card className='movie-details-card'>
        <CardMedia className='cover' component='img' image={image} />
        <div className='content'>
          <CardContent>
            <div className='description'>
              <h1>{title}</h1>
              <label className='rating'>{rating}</label>
            </div>
            <div className='description'>
              <h5 className='year'>{year}</h5>
              <h5>{duration} min</h5>
            </div>

            <p>{description}</p>
          </CardContent>
          <div />
        </div>
      </Card>
      <div className='movie-genre'>Films by {genre} genre</div>
    </React.Fragment>
  );
};

MovieDetails.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};

export default MovieDetails;

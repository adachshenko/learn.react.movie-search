import React from "react";
import PropTypes from 'prop-types';
import "./styles.scss";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const MovieCard = ({ image, title, year, genre, id }) => {
  //throw new Error('I crashed!');
  return (
    <Card
      className="card"
      onClick={() => console.log("go to the movie with id", id)}
    >
      <CardActionArea>
        <CardMedia component="img" image={image} />
        <CardContent className="content">
          <div>
            <label className="title">{title}</label>
            <label className="year">{year}</label>
          </div>
          <label className="genre">{genre}</label>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default MovieCard;

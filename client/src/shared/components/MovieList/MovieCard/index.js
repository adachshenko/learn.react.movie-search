import React from "react";
import "./styles.scss";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const MovieCard = ({ image, title, year, genre, id }) => {
  return (
    <Card className="card" onClick={() => console.log('go to the movie with id', id)}>
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

export default MovieCard;

import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import "./styles.scss";

const MovieDetails = ({ image, title, year, genre, description }) => {
  return (
    <Card className="movie-details-card">
      <CardMedia
        className="cover"
        component="img"
        image="https://upload.wikimedia.org/wikipedia/ru/thumb/1/1b/Titanic_3D_Poster.jpg/211px-Titanic_3D_Poster.jpg"
      />
      <div className="content">
        <CardContent>
          <div className="description">
            <h1>Pulp Fiction</h1>
            <label className="raiting">4.1</label>
          </div>
          <div className="description">
            <h5 className="year">1994</h5>
            <h5>154 min</h5>
          </div>

          <p>
            cndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd ncksdmnckdnckn
            cndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd ncksdmnckdnck
            cndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd
            ncksdmnckdnckcndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd
            ncksdmnckdnck cndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd
            ncksdmnckdnckn cndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd
            ncksdmnckdnck cndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd
            ncksdmnckdnckcndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd
            ncksdmnckdnck cndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd
            ncksdmnckdnckn cndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd
            ncksdmnckdnck cndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd
            ncksdmnckdnckcndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd
            ncksdmnckdnck
          </p>
        </CardContent>
        <div />
      </div>
    </Card>
  );
};

export default MovieDetails;

import React from "react";
import "./styles.scss";

import MovieList from "../../shared/components/MovieList";
import MovieDetails from "../MovieDetailsPage/MovieDetails";

class MovieDetailsPage extends React.Component {
  state = {
    movieList: [
      {
        id: "1",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YJySlwn9H389AOIAg0K8w2pRgJ1XW17csRyw0fmrjBGlvNPTWw",
        title: "Pulp Fiction",
        genre: "drama",
        year: "2005",
        raiting: 4.1,
        duration: 154,
        description:
          "kmcldcold cdmcdcdmc cdjmcdmckd  ncksdmnckdnckcndkncfdkcnkd cdkmcldcold cdmcdcdmc cdjmcdmckd ncksdmnc"
      },
      {
        id: "2",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YJySlwn9H389AOIAg0K8w2pRgJ1XW17csRyw0fmrjBGlvNPTWw",
        title: "Pulp Fiction",
        genre: "comedy",
        year: "2006"
      },
      {
        id: "3",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YJySlwn9H389AOIAg0K8w2pRgJ1XW17csRyw0fmrjBGlvNPTWw",
        title: "Pulp Fiction",
        genre: "comedy",
        year: "2006"
      },
      {
        id: "4",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YJySlwn9H389AOIAg0K8w2pRgJ1XW17csRyw0fmrjBGlvNPTWw",
        title: "Pulp Fiction",
        genre: "comedy",
        year: "2006"
      },
      {
        id: "5",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YJySlwn9H389AOIAg0K8w2pRgJ1XW17csRyw0fmrjBGlvNPTWw",
        title: "Pulp Fiction",
        genre: "comedy",
        year: "2006"
      },
      {
        id: "6",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YJySlwn9H389AOIAg0K8w2pRgJ1XW17csRyw0fmrjBGlvNPTWw",
        title: "Pulp Fiction",
        genre: "comedy",
        year: "2006"
      },
      {
        id: "7",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YJySlwn9H389AOIAg0K8w2pRgJ1XW17csRyw0fmrjBGlvNPTWw",
        title: "Pulp Fiction",
        genre: "comedy",
        year: "2006"
      }
    ]
  };
  render() {
    return (
      <div className="movie-page">
        <MovieDetails {...this.state.movieList[0]}/>
        <MovieList movieList={this.state.movieList} />
      </div>
    );
  }
}

export default MovieDetailsPage;

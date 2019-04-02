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
        title: "101 долматинец",
        genre: "comedy",
        year: "2005"
      },
      {
        id: "2",
        image:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/1/1b/Titanic_3D_Poster.jpg/211px-Titanic_3D_Poster.jpg",
        title: "102 долматинец",
        genre: "comedy",
        year: "2006"
      },
      {
        id: "3",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YJySlwn9H389AOIAg0K8w2pRgJ1XW17csRyw0fmrjBGlvNPTWw",
        title: "102 долматинец",
        genre: "comedy",
        year: "2006"
      },
      {
        id: "4",
        image:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/1/1b/Titanic_3D_Poster.jpg/211px-Titanic_3D_Poster.jpg",
        title: "102 долматинец",
        genre: "comedy",
        year: "2006"
      },
      {
        id: "5",
        image:
          "https://upload.wikimedia.org/wikipedia/ru/thumb/1/1b/Titanic_3D_Poster.jpg/211px-Titanic_3D_Poster.jpg",
        title: "102 долматинец",
        genre: "comedy",
        year: "2006"
      },
      {
        id: "6",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YJySlwn9H389AOIAg0K8w2pRgJ1XW17csRyw0fmrjBGlvNPTWw",
        title: "102 долматинец",
        genre: "comedy",
        year: "2006"
      },
      {
        id: "7",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YJySlwn9H389AOIAg0K8w2pRgJ1XW17csRyw0fmrjBGlvNPTWw",
        title: "102 долматинец",
        genre: "comedy",
        year: "2006"
      }
    ],
    searchByValue: "title",
    searchQuery: null,
    sortByValue: "vote_average",
  };

    render() {
    return (
      <React.Fragment>
        <MovieDetails />
        <MovieList movieList={this.state.movieList} />
      </React.Fragment>
    );
  }
}

export default MovieDetailsPage;

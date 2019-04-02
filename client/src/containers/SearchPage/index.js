import React from "react";
import "./styles.scss";

import Search from "./Search";
import MovieList from "../../shared/components/MovieList";
import MovieDetails from "../MovieDetailsPage/MovieDetails";

class SearchPage extends React.Component {
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

  switchSearchParam = newSearchParam => () => {
    this.setState({
        searchByValue: newSearchParam
    });
  };

  searchClickedHandler = () => {
    console.log("Search");
  };

  inputHandler = (event) => {
    this.setState({searchQuery: event.target.value});    
  }

  sortMovieList = sortByParam => () =>  {
    this.setState({
        sortByValue: sortByParam
    });
      console.log("Sort by", sortByParam );
  }

  render() {
    return (
      <div className="search-page">
        <Search
          switchSearchParam={this.switchSearchParam}
          searchClicked={this.searchClickedHandler}
          changed={this.inputHandler}
          sortByParam={this.sortMovieList}
          searchByValue={this.state.searchByValue}
          sortByValue={this.state.sortByValue}
          number={this.state.movieList.length}
        />
        <MovieList movieList={this.state.movieList} />
      </div>
    );
  }
}

export default SearchPage;

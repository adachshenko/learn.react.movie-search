import React from "react";
import "./styles.scss";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Search = ({
  searchQuery,
  changed,
  number,
  switchSearchParam,
  searchClicked,
  sortByParam,
  searchByValue,
  sortByValue
}) => {
  return (
    <React.Fragment>
      <div className="search">
        <TextField
          label="FIND YOUR MOVIE"
          value={searchQuery}
          onChange={changed}
          margin="normal"
        />
        <div className="button-container">
          <div className="filter-buttons">
            <label>SEARCH BY</label>
            <Button
              variant="contained"
              className={searchByValue === "title" ? "active" : ""}
              onClick={switchSearchParam("title")}
            >
              title
            </Button>
            <Button
              variant="contained"
              className={searchByValue === "genre" ? "active" : ""}
              onClick={switchSearchParam("genre")}
            >
              genre
            </Button>
          </div>
          <Button variant="contained" color="secondary" onClick={searchClicked}>
            search
          </Button>
        </div>
      </div>
      <div className="sort">
        <label>{number} movies found</label>
        <div>
          <label>Sort by</label>
          <Button
            onClick={sortByParam("release_date")}
            className={sortByValue === "release_date" ? "active" : ""}
          >
            release date
          </Button>
          <Button
            onClick={sortByParam("vote_average")}
            className={sortByValue === "vote_average" ? "active" : ""}
          >
            rating
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;

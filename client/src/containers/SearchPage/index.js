import React from 'react';

import MovieList from '../../shared/components/MovieList';
import Search from './Search';
import './styles.scss';
import {movieList} from '../../mock-data.json';

class SearchPage extends React.Component {
  state = {
    movieList,
    searchByValue: 'title',
    searchQuery: null,
    sortByValue: 'vote_average'
  };

  switchSearchParam = newSearchParam => () => {
    this.setState({
      searchByValue: newSearchParam
    });
  };

  searchClickedHandler = () => {
    console.log('Search');
  };

  inputHandler = event => {
    this.setState({ searchQuery: event.target.value });
  };

  sortMovieList = sortByValue => () => {
    this.setState({ sortByValue });
    console.log('Sort by', sortByValue);
  };

  render() {
    const {searchByValue, sortByValue, movieList} = this.state;
    return (
      <div className='search-page'>
        <Search
          switchSearchParam={this.switchSearchParam}
          searchClicked={this.searchClickedHandler}
          changed={this.inputHandler}
          sortByParam={this.sortMovieList}
          searchByValue={searchByValue}
          sortByValue={sortByValue}
          number={movieList.length}
        />
        <MovieList movieList={movieList} />
      </div>
    );
  }
}

export default SearchPage;

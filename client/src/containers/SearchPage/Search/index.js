import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import classNames from 'classnames';
import './styles.scss';

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
      <div className='search'>
        <TextField
          label='FIND YOUR MOVIE'
          value={searchQuery}
          onChange={changed}
          margin='normal'
        />
        <div className='button-container'>
          <div className='filter-buttons'>
            <label>SEARCH BY</label>
            <Button
              variant='contained'
              className={classNames({ active: searchByValue === 'title' })}
              onClick={switchSearchParam('title')}
            >
              title
            </Button>
            <Button
              variant='contained'
              className={classNames({ active: searchByValue === 'genre' })}
              onClick={switchSearchParam('genre')}
            >
              genre
            </Button>
          </div>
          <Button variant='contained' color='secondary' onClick={searchClicked}>
            search
          </Button>
        </div>
      </div>
      <div className='sort'>
        <label>{number} movies found</label>
        <div>
          <label>Sort by</label>
          <Button
            onClick={sortByParam('release_date')}
            className={classNames({ active: sortByValue === 'release_date' })}
          >
            release date
          </Button>
          <Button
            onClick={sortByParam('vote_average')}
            className={sortByValue === 'vote_average' ? 'active' : ''}
          >
            rating
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

Search.propTypes = {
  searchQuery: PropTypes.string,
  sortByValue: PropTypes.string.isRequired,
  searchByValue: PropTypes.string.isRequired,
  sortByParam: PropTypes.func.isRequired,
  changed: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  switchSearchParam: PropTypes.func.isRequired,
  searchClicked: PropTypes.func.isRequired
};

export default Search;

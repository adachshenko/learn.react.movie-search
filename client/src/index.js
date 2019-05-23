import React from 'react';
import ReactDOM from 'react-dom';

import Footer from './shared/components/Footer';
import ErrorBoundary from './shared/components/ErrorBoundary';
import SearchPage from './containers/SearchPage';
import MovieDetailsPage from './containers/MovieDetailsPage';

import 'styles.scss';

const App = () => {
  return (
    <ErrorBoundary>
      <SearchPage />
      {/* <MovieDetailsPage /> */}
      <Footer />
    </ErrorBoundary>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

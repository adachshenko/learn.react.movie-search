import React from 'react';
import ReactDOM from 'react-dom';

import Top from './components/top';
import Middle from './components/middle';
import Bottom from './components/bottom';

import "styles.scss";

const App = () => {
  return (
    <div>
      <Top />
      <Middle />
      {Bottom}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
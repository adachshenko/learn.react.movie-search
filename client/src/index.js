import React from "react";
import ReactDOM from "react-dom";

import SearchPage from "./containers/SearchPage";
import Footer from "./shared/components/Footer";
import MovieDetailsPage from "./containers/MovieDetailsPage";

import "styles.scss";

const App = () => {
  return (
    <React.Fragment>
      {/* <SearchPage /> */}
      <MovieDetailsPage />
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

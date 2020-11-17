// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* THIS IS THE VIEWS IMPORTS */
import Home from './Views/Home';
import AllMovies from './Views/AllMovies';
import MovieDetail from './Views/MovieDetail';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/allmovies/:id" component={AllMovies} />
        <Route path="/moviedetail/:id" component={MovieDetail} />
      </Switch>

    </Router >
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* THIS IS THE VIEWS IMPORTS */
import Home from './Views/Home';
import AboutUs from './Views/AboutUs';
import AllMovies from './Views/AllMovies';
import Login from './Views/Login';
import MovieDetail from './Views/MovieDetail';
import SignUp from './Views/Register';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/allmovies/:id" component={AllMovies} />
        <Route path="/about/" component={AboutUs} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={SignUp} />
        <Route path="/moviedetail/:id" component={MovieDetail} />
      </Switch>

    </Router >
  );
}

export default App;

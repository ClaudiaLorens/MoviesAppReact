import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Header';
import MoviesList from './movies/MoviesList';
import MovieCreate from './movies/MovieCreate';
import MoviesDetails from './movies/MoviesDetails';
import MoviesUpdate from './movies/MoviesUpdate';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={MoviesList}/>
              <Route path="/movies/create" component={MovieCreate}/>
              <Route exact path="/movies/:id" component={MoviesDetails}/>
              <Route path="/movies/update/:id" component={MoviesUpdate}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

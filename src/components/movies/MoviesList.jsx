import React, {Component} from 'react';
import axios from 'axios';
import FlipMove from 'react-flip-move';

import MoviesItem from './MoviesItem';

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios.get('/movies').then((response) => {
      this.setState({movies: response.data.movies});
    }).catch((err) => {
      console.log(err);
    });
  }

  renderMovies() {
    return this.state.movies.map((movie, index) => {
      return <MoviesItem key={index} movie={movie}/>;
    });
  }

  render() {
    return(
      <div>
        <h1 className="text-center">All movies</h1>
        <hr/>
        <div className="row">
          <FlipMove>
            {this.renderMovies()}
          </FlipMove>
        </div>
      </div>
    );
  }
}

export default MoviesList;

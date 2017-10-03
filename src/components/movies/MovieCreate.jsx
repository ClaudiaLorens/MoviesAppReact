import React, {Component} from 'react';
import axios from 'axios';

import MoviesForm from './MoviesForm';

class MovieCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const sinopsis = document.getElementById('sinopsis').value;
    const pegi = document.getElementById('pegi').value;

    axios.post('/movies', {title, genre, sinopsis, pegi}).then((response) => {
      this.props.history.push("/");
    }).catch((err) => {
      this.setState({errors: err.response.data.message.errors});
    });
  }

  render() {
    return(
      <div>
        <h1 className="text-center">Create movie</h1>
        <hr/>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <MoviesForm handleSubmit={this.handleSubmit} errors={this.state.errors}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCreate;

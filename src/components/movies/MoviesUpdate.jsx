import React, {Component} from 'react';
import axios from 'axios';

import MoviesForm from './MoviesForm';

class MoviesUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/movies/${id}`).then((response) => {
      this.setState({movie: response.data.movie});
    }).catch((err) => {
      console.log(err);
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const sinopsis = document.getElementById('sinopsis').value;
    const pegi = document.getElementById('pegi').value;

    axios.put(`/movies/${this.state.movie._id}`, {title, genre, sinopsis, pegi}).then(() => {
      this.props.history.push(`/movies/${this.state.movie._id}`);
    }).catch((err) => {
      this.setState({errors: err.response.data.errors});
    });
  }

  render() {
    console.log(this.state.movie);
    if (!this.state.movie._id) {
      return <div></div>;
    }
    return(
      <div>
        <MoviesForm movie={this.state.movie} handleSubmit={this.handleSubmit} errors={this.state.errors}/>
      </div>
    );
  }
}

export default MoviesUpdate;

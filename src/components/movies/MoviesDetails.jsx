import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MoviesDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/movies/${id}`).then((response) => {
      this.setState({movie: response.data.movie});
    }).catch((err) => {
      console.log(err);
    });
  }

  onRemoveClick() {
    axios.delete(`/movies/${this.state.movie._id}`).then((response) => {
      this.props.history.push("/");
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const movie = this.state.movie;
    const url = `/movies/update/${movie._id}`;
    console.log(this.state.movie);
    if (!movie._id) {
      return <div></div>;
    }
    return(
      <div>
        <h1 className="text-center">Movie details</h1>
        <hr/>
        <div className="col-xs-12 col-sm-6 col-sm-offset-3" id="movieDetails">
          <small className="pull-right">Pegi: {movie.pegi}</small>
          <h1 className="text-center">{movie.title}</h1>
          <h4 className="text-center">{movie.genre}</h4>
          <p className="text-center">{movie.sinopsis}</p>

          <Link className="btn btn-primary" to={url}>Update</Link>
          <button className="btn btn-danger pull-right" onClick={() => this.onRemoveClick()}>Remove</button>
        </div>
      </div>
    );
  }
}

export default MoviesDetails;

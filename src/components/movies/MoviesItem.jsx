import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class MoviesItem extends Component {
  render() {
    const movie = this.props.movie;
    const url = `/movies/${movie._id}`;

    return(
      <div className="col-xs-12 col-sm-4">
        <Link to={url}>
          <div className="panel panel-default">
            <div className="panel-body">
              <h1 className="text-center">{movie.title}</h1>
              <h3 className="text-center text-muted">{movie.genre}</h3>

              <p className="text-justify">{movie.sinopsis}</p>

              <div className="pull-right">
                <small>
                  PEGI: {movie.pegi}
                </small>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

MoviesItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.oneOf(['comedy', 'horror', 'scy-fiction', 'drama']),
    sinopsis: PropTypes.string,
    pegi: PropTypes.oneOf([3, 7, 12, 16, 18])
  }).isRequired
}

export default MoviesItem;

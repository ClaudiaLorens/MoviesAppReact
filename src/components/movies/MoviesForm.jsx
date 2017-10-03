import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ErrorMessage from '../forms/ErrorMessage';

class MoviesForm extends Component {
  render() {
    const errors = this.props.errors;
    const movie = this.props.movie;
    const titleClass = errors.title ? "form-group has-error" : "form-group";
    const genreClass = errors.genre ? "form-group has-error" : "form-group";
    const sinopsisClass = errors.sinopsis ? "form-group has-error" : "form-group";
    const pegiClass = errors.pegi ? "form-group has-error" : "form-group";

    return(
      <form onSubmit={this.props.handleSubmit}>
        <div className={titleClass}>
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Title" defaultValue={movie ? movie.title : ''}/>
          {errors.title ? <ErrorMessage message={errors.title.message}/> : ""}
        </div>

        <div className={genreClass}>
          <label htmlFor="genre">Genre</label>
          <select id="genre" className="form-control" defaultValue={movie ? movie.genre : ''}>
            <option value="">Select a genre</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="scy-fiction">Scy-fiction</option>
            <option value="drama">Drama</option>
          </select>
          {errors.genre ? <ErrorMessage message={errors.genre.message}/> : ""}
        </div>

        <div className={sinopsisClass}>
          <label htmlFor="sinopsis">Synopsis</label>
          <textarea
            id="sinopsis"
            cols="30"
            rows="10"
            className="form-control"
            defaultValue={movie ? movie.sinopsis : ''}
            placeholder="Synopsis"></textarea>
          {errors.sinopsis ? <ErrorMessage message={errors.sinopsis.message}/> : ""}
        </div>

        <div className={pegiClass}>
          <label htmlFor="pegi">Pegi</label>
          <select id="pegi" className="form-control" defaultValue={movie ? movie.pegi : ''}>
            <option value="">Select a pegi</option>
            <option value="3">3</option>
            <option value="7">7</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value="18">18</option>
          </select>
          {errors.pegi ? <ErrorMessage message={errors.pegi.message}/> : ""}
        </div>

        <div className="text-center">
            <button type="submit" className="btn btn-primary" id="createButton">
              {movie ? 'Update' : 'Create'}
            </button>
          </div>
      </form>
    );
  }
}

MoviesForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.oneOf(['comedy', 'horror', 'scy-fiction', 'drama']),
    sinopsis: PropTypes.string,
    pegi: PropTypes.oneOf([3, 7, 12, 16, 18])
  }),
  errors: PropTypes.object
}

export default MoviesForm;

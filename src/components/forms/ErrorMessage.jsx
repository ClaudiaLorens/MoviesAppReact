import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({message}) => {
  return(
    <span className="help-block">
      <strong>
        {message}
      </strong>
    </span>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage;

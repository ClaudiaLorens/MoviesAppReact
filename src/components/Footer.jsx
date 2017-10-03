import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="text-center">
        <h3>Keep in touch!</h3>
          <Link className="contact-info" to="https://www.linkedin.com/in/claudia-lorenzo-0235b2122/" target="_blank">Linkedin</Link>
          <h4 className="contact-info">clau.lorens.23@gmail.com</h4>
      </div>
    );
  }
}

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <div className="App">
        <footer className="footer is-primary">
          <div className="content has-text-centered">
            <p>
              <strong>Website</strong> by <a href="https://www.linkedin.com/in/nick-fourtounis-40b039116/">Nick Fourtounis</a>. For the source code click
              <a href="http://opensource.org/licenses/mit-license.php">here</a>.
            </p>
          </div>
          <div class="content has-text-right">
            <a className="icon" href="#"><i className="fab fa-facebook-square"></i></a>
            <a className="icon" href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </footer>
      </div>
    );
  };

export default Footer;

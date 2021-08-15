import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <div className="footer">
      <h2 className="white-font">
        Connect with us
      </h2>
      <div className="contact-block">
        <h3 className="white-font">
          Email
        </h3>
        <h3 className="white-font">
          Facebook
        </h3>
        <h3 className="white-font">
          Instagram
        </h3>
        <h3 className="white-font">
          LinkedIn
        </h3>
      </div>
      <h3 className="white-font">
        (c) 2021 MCG - Management Consulting Group
      </h3>
    </div>
  )
}

export default React.memo(Footer);
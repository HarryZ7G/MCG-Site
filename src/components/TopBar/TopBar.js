import React from 'react';
import MCG_Logo from '../../media/MCG_Logo_White.png';
import './TopBar.css';
// import 'animate.css';

function TopBar(props) {
  return (
    <div className="top-bar">
      <div className="logo-group">
        <img src={MCG_Logo} className="mcg-logo"/>
        {/* <text className="logo-font">MCG</text> */}
      </div>
      <div className="sections-group">
        <a href="/about">
          <h2 className="section-link white-font">Team</h2>
        </a>
        <a href="/events">
          <h2 className="section-link white-font">Events</h2>
        </a>
        <h2 className="section-link white-font last-link">Contacts</h2>
      </div>
    </div>
  )
}

export default React.memo(TopBar);
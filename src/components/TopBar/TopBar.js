import React from 'react';
import MCG_Logo from '../../media/MCG_Logo_White.png';
import './TopBar.css';

function TopBar(props) {

  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
    }); 
  };

  return (
    <div className="top-bar">
      <a href="/">
        <div className="logo-group">
          <img src={MCG_Logo} className="mcg-logo"/>
        </div>
      </a>
      <div className="sections-group">
        <a href="/team">
          <h2 className="section-link white-font">Our Team</h2>
        </a>
        <a href="/events">
          <h2 className="section-link white-font">Events</h2>
        </a>
        <a>
          <h2 className="section-link white-font last-link" onClick={scrollToBottom}>Contacts</h2>
        </a>
      </div>
    </div>
  )
}

export default React.memo(TopBar);
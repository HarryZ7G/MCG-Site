import React from 'react';
import TopBar from '../../components/TopBar/TopBar.js';
import './About.css';

function About(props) {
  return (
    <div className="root">
      <div className="home-background"/>
      <TopBar/>
      <div>
        <h1 style={{zIndex: 5}}>
          About
        </h1>
      </div>
    </div>
  )
}

export default React.memo(About);
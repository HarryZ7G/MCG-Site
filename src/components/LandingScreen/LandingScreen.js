import React from 'react';
import './LandingScreen.css';

// Media
import organize from '../../media/OrganizeResume.svg';

function LandingScreen(props) {
  return (
    <div className="landing-screen">
      <text className="home-title landing-title white-font">
        Making <mark className="cyan">meaningful impacts</mark> in the community — one consultation at a time
      </text>
      <text className="landing-sub-title white-font">
        We are University of Toronto Scarborough’s premier consulting group.
      </text>
    </div>
  )
}

export default React.memo(LandingScreen);
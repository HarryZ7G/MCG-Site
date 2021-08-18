import React from 'react';
import './LandingScreen.css';

function LandingScreen(props) {
  return (
    <div className="landing-screen">
      {/* <h1 className="landing-title white-font"> */}
      <h1 className="landing-title animate__animated animate__fadeIn animate__delay-05s">
        Making <mark className="purple">meaningful impacts</mark> in the community — one consultation at a time
      </h1>
      {/* <h2 className="white-font"> */}
      <h2 className="animate__animated animate__fadeIn animate__delay-05s">
        We are University of Toronto Scarborough’s premier consulting group.
      </h2>
    </div>
  )
}

export default React.memo(LandingScreen);
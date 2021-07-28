import React from 'react';
import TopBar from '../../components/TopBar/TopBar.js';
import './Events.css';

// Media
import organize from '../../media/OrganizeResume.svg';
// import 'animate.css';

function Events(props) {
  return (
    <div className="root">
      <div className="home-background"/>
      <TopBar/>
      {/* <div className="home-block-group">
        <div className="home-block"></div>
        <div className="home-block"></div>
      </div> */}
      <div>
        <h1 style={{zIndex: 5}}>
          Events
        </h1>
      </div>
    </div>
  )
}

export default React.memo(Events);
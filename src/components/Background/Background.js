import React from 'react';
import TopStroke from '../../media/TopStroke.png';
import SideStroke from '../../media/SideStroke.svg';
import './Background.css';

// Media
import organize from '../../media/OrganizeResume.svg';

function Background(props) {
  return (
    <div className="home-background">
      <img src={TopStroke} className="top-stroke"/>
      <img src={SideStroke} className="side-stroke"/>
    </div>
  )
}

export default React.memo(Background);
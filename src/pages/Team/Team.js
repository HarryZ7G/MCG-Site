import React from 'react';
import './Team.css';

function Team(props) {
  return (
    <div className="root">
      <div>
        <h1 style={{zIndex: 5}}>
          Our Team
        </h1>
      </div>
    </div>
  )
}

export default React.memo(Team);
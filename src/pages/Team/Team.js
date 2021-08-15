import React from 'react';
import './Team.css';

//Components
import TopComponent from  "../../components/TopComponent/TomComponent.js";
import TopBar from '../../components/TopBar/TopBar.js';

function Team(props) {
  return (
    <div className="root">
      <div>
        <TopComponent
          header="Our Team"
        />
        <TopBar/>
      </div>
    </div>
  )
}

export default React.memo(Team);
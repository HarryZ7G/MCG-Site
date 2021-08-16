import React from 'react';
import './Events.css';

//Components
import TopComponent from  "../../components/TopComponent/TomComponent.js";
import TopBar from '../../components/TopBar/TopBar.js';

function Events(props) {
  return (
    <div className="root">
      <div>
        <TopComponent
          header="Events"
        />
        <TopBar/>
      </div>
    </div>
  )
}

export default React.memo(Events);
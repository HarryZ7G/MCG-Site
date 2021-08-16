import React from 'react';
import TopBackground from '../../media/TopBackground.svg';
import './TopComponent.css';

function TopComponent(props) {
    return (
      <div className="top-component">
        <img src={TopBackground} className="top-component-background"/>
        <h1 className="header-text">
            {props.header}
        </h1>
      </div>
    )
  }

  export default React.memo(TopComponent);
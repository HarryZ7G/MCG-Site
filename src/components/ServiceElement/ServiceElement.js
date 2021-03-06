import React from 'react';
import './ServiceElement.css';

function ServiceElement(props) {
  return (
    <div className="service-element">
      {/* <div className="service-image"/> */}
      <img className="service-image" src={props.image} alt={props.title}/>
      <h2 className="service-title">
        {props.title}
      </h2>
      <h3 className="service-description">
        {props.description}
      </h3>
    </div>
  )
}

export default React.memo(ServiceElement);
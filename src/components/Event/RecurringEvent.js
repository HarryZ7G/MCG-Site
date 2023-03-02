import React from "react";
import "./Event.css";

function RecurringEvent(props) {
  return (
    <div className="event-element animate__animated animate__fadeIn animate__delay-1s">
      <img className="event-image" src={props.image} />
      <div className="event-information">
        <h2>{props.title}</h2>
        <div className="event-time">
          <h3>Frequency: {props.frequency}</h3>
        </div>
      </div>
      <button
        className="register-button"
        onClick={() => window.open(props.link)}
      >
        <h3 className="white-font">Register</h3>
      </button>
    </div>
  );
}

export default React.memo(RecurringEvent);

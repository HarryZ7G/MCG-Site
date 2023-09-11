import React, { useEffect } from "react";
import "./Event.css";

function Event(props) {
  const [passed, setPassed] = React.useState(false);
  const [text, setText] = React.useState("Register");

  useEffect(() => {
    if (props.date) {
      let today = new Date();
      let day = parseInt(today.getDate());
      let month = parseInt(today.getMonth() + 1);
      let year = parseInt(today.getFullYear());
      if (props.date.year < year) {
        setPassed(true);
        setText("Passed");
      } else if ((props.date.year === year) & (props.date.month < month)) {
        setPassed(true);
        setText("Passed");
      } else if (
        (props.date.year === year) &
        (props.date.month === month) &
        (props.date.day < day)
      ) {
        setPassed(true);
        setText("Passed");
      }
    }
  }, []);

  return (
    <div className="event-element animate__animated animate__fadeIn animate__delay-1s">
      <img className="event-image" src={props.image} />
      <div className="event-information">
        <h2>{props.title}</h2>
        <div className="event-time">
          <h3>Date: {props.day}</h3>
          <h3>Time: {props.start + " - " + props.end}</h3>
          <h3>Location: {props.location}</h3>
        </div>
      </div>
      {
        props.link &&
        <button
          className="register-button"
          disabled={passed}
          onClick={() => window.open(props.link)}
        >
          <h3 className="white-font">{text}</h3>
        </button>
      }
      {
        props.status &&
        <h3 className="update-text">{props.status}</h3>
      }
    </div>
  );
}

export default React.memo(Event);

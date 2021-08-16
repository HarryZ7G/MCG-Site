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
      )
        setPassed(true);
        setText("Passed");
    }
  }, []);

  return (
    <div className="event-element animate__animated animate__fadeIn animate__delay-1s">
      <div className="event-left">
        <div className="event-date">
          <h2>{props.day}</h2>
          <h2>{props.weekday}</h2>
        </div>
        <div className="event-image" />
      </div>
      <div className="event-information">
        <h2>{props.title}</h2>
        <div className="event-time">
          <h3>Start: {props.start}</h3>
          <h3>End: {props.end}</h3>
        </div>
        <h3 className="event-location">Location: {props.location}</h3>
      </div>
      <button className="register-button" disabled={passed}>
        <h3 className="white-font">{text}</h3>
      </button>
    </div>
  );
}

export default React.memo(Event);

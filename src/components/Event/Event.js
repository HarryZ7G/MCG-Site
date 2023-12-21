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
  }, [props.date]);

  return (
    <div className="event-element animate__animated animate__fadeIn animate__delay-1s">
      <img className="event-image" src={props.image} alt={props.title}/>
      <div className="event-information">
        <h2 className={`purple-font`}>{props.title}</h2>
        <div className="event-time">
          <p>Date: {props.day}</p>
          <p>Time: {props.start + " - " + props.end}</p>
          <p>Location: {props.location}</p>
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

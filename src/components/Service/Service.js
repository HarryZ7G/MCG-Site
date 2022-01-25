import React from "react";
import "./Service.css";

function Service(props) {
  return (
    <div className="service-page-element animate__animated animate__fadeIn animate__delay-1s">
      <h1 className="purple-font">{props.title}</h1>
      {props.text}
    </div>
  );
}

export default React.memo(Service);

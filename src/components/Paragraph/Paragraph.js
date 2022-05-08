import React from "react";
import "./Paragraph.css";

function Paragraph(props) {
  return (
    <div className="paragraph animate__animated animate__fadeIn animate__delay-1s">
      <h1 className="purple-font">{props.title}</h1>
      <h2 className="purple-font">{props.altTitle}</h2>
      {props.content}
    </div>
  );
}

export default React.memo(Paragraph);
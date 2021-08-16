import React from "react";
import "./PageTitle.css";

function PageTitle(props) {
  return (
    <div className="page-title animate__animated animate__fadeIn">
      <h1 className="purple-font animate__animated animate__fadeIn animate__delay-1s">
        {props.title}
      </h1>
      <h2 className="animate__animated animate__fadeIn animate__delay-2s">
        {props.intro}
      </h2>
    </div>
  );
}

export default React.memo(PageTitle);

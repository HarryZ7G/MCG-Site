import React, { useEffect } from "react";
import "./File.css";

// Media
import Profile from "../../media/Profile.svg";

function File(props) {

  const [picture, setPicture] = React.useState(Profile);
  const [empty, setEmpty] = React.useState(null);

  useEffect(() => {
    if (props.picture) setPicture(props.picture);
  }, []);

  return (
    <div
      className={`file-container`}
      onClick={() => window.open(props.link)}
    >
      <div className="label">
        {props.label}
      </div>
      <div className="folder"/>
      <img className={`${empty}`} src={picture} alt="" />
      <h2>{props.name}</h2>
    </div>
  );
}

export default React.memo(File);
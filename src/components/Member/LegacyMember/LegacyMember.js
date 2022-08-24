import React, { useEffect } from "react";
import "./LegacyMember.css";

// Media
import Profile from "../../../media/Profile.svg";

function LegacyMember(props) {

  const [picture, setPicture] = React.useState(Profile);
  const [empty, setEmpty] = React.useState(null);

  useEffect(() => {
    if (props.picture) setPicture(props.picture);
  }, []);

  return (
    <div
      className={`legacy-member-container animate__animated animate__fadeIn`}
      onClick={() => window.open(props.link)}
    >
      <img className={`${empty}`} src={picture} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
    </div>
  );
}

export default React.memo(LegacyMember);
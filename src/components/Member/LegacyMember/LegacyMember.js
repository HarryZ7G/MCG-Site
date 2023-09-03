import React from "react";
import "./LegacyMember.css";

// Media
import Profile from "../../../media/Profile.svg";

function LegacyMember(props) {

  const picture = props.picture ?? Profile;
  const empty = null;

  return (
    <div
      className={`legacy-member-container`}
      onClick={() => window.open(props.link)}
    >
      <img className={`${empty}`} src={picture} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
    </div>
  );
}

export default React.memo(LegacyMember);
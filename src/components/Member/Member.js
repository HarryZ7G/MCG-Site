import React, { useEffect } from "react";
import "./Member.css";

// Media
import Profile from "../../media/Profile.svg";
import LinkedinAlt from "../../media/Linkedin_alt.svg";

function Member(props) {
  const [picture, setPicture] = React.useState(Profile);
  const [empty, setEmpty] = React.useState(null);
  const [flip, setFlip] = React.useState(null);
  const [expand, setExpand] = React.useState(null);
  const container = React.useRef();

  useEffect(() => {
    if (props.picture) setPicture(props.picture);
  }, []);

  return (
    <div
      className={`member-container`}
      style={expand}
      onClick={() => {
        if (flip !== "member-flip") {
          setFlip("member-flip");
          setExpand({height: container.current.clientHeight, marginBottom: "60px"});
        } else {
          setFlip("member-backflip");
          setExpand({});
        }
      }}
    >
      <div className={`member-inner ${flip}`}>
        <div className="member-front">
          <img className={`${empty}`} src={picture} alt="" />
          <h2>
            {props.first} {props.last}
          </h2>
          <h3>{props.title}</h3>
        </div>
        <div className="member-back" ref={container}>
          <div className="background" />
          <div>
            <img
              className={`profile-picture ${empty}`}
              src={picture}
              alt=""
            />
            <div className="heading">
              <h2>
                {props.first}
                <br />
                {props.last}
              </h2>
            </div>
          </div>
          <h3>{props.intro}</h3>
          <img className="logo" src={LinkedinAlt} onClick={() => window.open(props.link)} alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Member);

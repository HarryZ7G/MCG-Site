import React from 'react';
import './MemberPopup.css';

function MemberPopup(props) {
  return (
    <div className={`member-popup ${props.show}`}>
      <button className="member-close" onClick={props.close}/>
      <h1>{props.name}</h1>
      <h2>{props.intro.title}</h2>
      <h2>{props.intro.bio}</h2>
    </div>
  )
}

export default React.memo(MemberPopup);
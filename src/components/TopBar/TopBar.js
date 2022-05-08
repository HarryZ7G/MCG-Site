import React from 'react';
import MCG_Logo from '../../media/MCG_Logo_B.png';
import './TopBar.css';

function TopBar(props) {

  const [show, setShow] = React.useState("hidden");
  const [color, setColor] = React.useState("gray-border");
  const [topActive, setTopActive] = React.useState(null);
  const [botActive, setBotActive] = React.useState(null);

  const handleClick = () => {
    if (show === "hidden") {
      setShow("show");
      setTopActive("top-active");
      setBotActive("bottom-active");
      setColor("purple-border");
    } else {
      setShow("hidden");
      setTopActive(null);
      setBotActive(null);
      setColor("gray-border");
    }
  }

  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
    }); 
  };

  return (
    <div className="top-bar animate__animated animate__fadeIn animate__delay-05s">
      <a href="/">
        <img src={MCG_Logo} className="mcg-logo" alt="MCG Logo"/>
      </a>
      <button className={`sections-selector ${color}`} onClick={handleClick}>
        <div className={`inner-line ${topActive}`}/>
        <div className={`inner-line bottom ${botActive}`}/>
      </button>
      <div className={`sections-popup ${show}`}>
        <a href="/about">
          <h2 className="section-link">About</h2>
        </a>
        <a href="/events">
          <h2 className="section-link">Events</h2>
        </a>
        <a href="/career">
          <h2 className="section-link">Career</h2>
        </a>
        <a>
          <h2 className="section-link" onClick={scrollToBottom}>Contacts</h2>
        </a>
      </div>
      <div className="sections-group">
        <a href="/about">
          <h2 className="section-link">About</h2>
        </a>
        <a href="/events">
          <h2 className="section-link">Events</h2>
        </a>
        <a href="/career">
          <h2 className="section-link">Career</h2>
        </a>
        <a>
          <h2 className="section-link" onClick={scrollToBottom}>Contacts</h2>
        </a>
      </div>
    </div>
  )
}

export default React.memo(TopBar);
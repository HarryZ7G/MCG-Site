import React from 'react';
import MCG_Logo from '../../media/MCG_Logo.png';
import './TopBar.css';

function TopBar(props) {

  const [show, setShow] = React.useState("hidden");
  const [color, setColor] = React.useState("gray-border");
  const [topActive, setTopActive] = React.useState(null);
  const [botActive, setBotActive] = React.useState(null);
  const [bannerActive, setBannerActive] = React.useState(true);

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

  return (
    <div className="top-bar">
      {bannerActive && <div className="banner">
        <div className="banner-content">
        <p>Are you a U of T student? Help us improve your video lecture experience.
        </p>
          <div className='banner-link-button'><a href="https://forms.office.com/Pages/ResponsePage.aspx?id=JsKqeAMvTUuQN7RtVsVSEIGgucZctIFEhu-S3L5i2otUMkRVWTVBOVNSM0tWNlJTRlBWMFg2WlJPMS4u" >
            Complete our survey
          </a>
          </div>
        </div>
        {/* <div className='banner-close-button'>
          <button onClick={() => setBannerActive(false)}>X</button>
        </div> */}
      </div>
      
      }
      <div className="nav-bar">
        <a href="/">
          <img src={MCG_Logo} className="mcg-logo" alt="MCG Logo" />
        </a>
        <button className={`sections-selector ${color}`} onClick={handleClick}>
          <div className={`inner-line ${topActive}`} />
          <div className={`inner-line bottom ${botActive}`} />
        </button>
        <div className={`sections-popup ${show}`}>
          <a href="/about">
            <h2 className="section-link">About</h2>
          </a>
          <a href="/events">
            <h2 className="section-link">Events</h2>
          </a>
          <a href="/consults">
            <h2 className="section-link">Services</h2>
          </a>
          <a href="/research">
            <h2 className="section-link">Research</h2>
          </a>
          <a href="/resources">
            <h2 className="section-link">Resources</h2>
          </a>
          <a href="/team">
            <h2 className="section-link">Our Team</h2>
          </a>
          <a href="/hiring">
            <h2 className="section-link">Hiring</h2>
          </a>
        </div>
        <div className="sections-group">
          <a href="/about">
            <h2 className="section-link">About</h2>
          </a>
          <a href="/events">
            <h2 className="section-link">Events</h2>
          </a>
          <a href="/consults">
            <h2 className="section-link">Services</h2>
          </a>
          <a href="/research">
            <h2 className="section-link">Research</h2>
          </a>
          <a href="/resources">
            <h2 className="section-link">Resources</h2>
          </a>
          <a href="/team">
            <h2 className="section-link">Our Team</h2>
          </a>
          <a href="/hiring">
            <h2 className="section-link">Hiring</h2>
          </a>
        </div>
      </div>
    </div>
  )
}

export default React.memo(TopBar);
import React from 'react';
import links from '../../data/links';
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
          {
            links.map(obj => <a href={obj.link}>
              <h2 className="section-link">{obj.title}</h2>
            </a>)
          }
        </div>
        <div className="sections-group">
          {
            links.map(obj => <a href={obj.link}>
              <h2 className="section-link">{obj.title}</h2>
            </a>)
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(TopBar);
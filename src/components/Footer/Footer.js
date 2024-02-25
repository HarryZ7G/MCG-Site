import React from "react";
import "./Footer.css";

// Media
import MCG_Logo from '../../media/MCG_Logo_clean.png';
import Email from "../../media/Email.svg";
import FaceBook from "../../media/Facebook.svg";
import Instagram from "../../media/Instagram.svg";
import LinkedIn from "../../media/Linkedin.svg";
import links from "../../data/links";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="/">
            <img src={MCG_Logo} className="footer-logo-image" alt="MCG Logo" />
          </a>
        </div>
        <div className="footer-links">
          {
            links.map(obj => <a className="footer-links-text" href={obj.link}>
              <h4>{obj.title}</h4>
            </a>)
          }
        </div>
      </div>
      <div className="footer-contact">
        <span className="white-font footer-copyright">©2024 MCG - Management Consulting Group</span>
      
        <div className="contact-block">
          <a href='mailto:mcg.utsc@gmail.com'>
            <img src={Email} alt="Email" />
          </a>
          <a href="https://www.facebook.com/UTSCMCG/">
            <img src={FaceBook} alt="FaceBook" />
          </a>
          <a href="https://www.instagram.com/mcg_utsc/">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/utscmcg/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);

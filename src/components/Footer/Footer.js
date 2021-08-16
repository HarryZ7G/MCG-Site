import React from "react";
import "./Footer.css";

function Footer(props) {
  const [title, setTitle] = React.useState("Connect with us");

  const CopyEmail = () => {
    setTitle("Copied to clipboard");
    setTimeout(() => {
      setTitle("Connect with us");
    }, 4000);
    navigator.clipboard.writeText(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    );
  };

  return (
    <div className="footer">
      <h2 className="white-font">{title}</h2>
      <div className="contact-block">
        <a>
          <h3 className="white-font" onClick={CopyEmail}>
            Email
          </h3>
        </a>
        <a>
          <h3
            className="white-font"
            onClick={() => window.open("https://www.facebook.com/UTSCMCG/")}
          >
            Facebook
          </h3>
        </a>
        <a>
          <h3
            className="white-font"
            onClick={() => window.open("https://www.instagram.com/mcg_utsc/")}
          >
            Instagram
          </h3>
        </a>
        <a>
          <h3
            className="white-font"
            onClick={() =>
              window.open("https://www.linkedin.com/company/utscmcg/")
            }
          >
            LinkedIn
          </h3>
        </a>
      </div>
      <h3 className="white-font">(c) 2021 MCG - Management Consulting Group</h3>
    </div>
  );
}

export default React.memo(Footer);

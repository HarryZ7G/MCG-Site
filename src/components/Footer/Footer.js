import React from "react";
import "./Footer.css";

// Media
import Email from "../../media/Email.svg";
import FaceBook from "../../media/FaceBook.svg";
import Instagram from "../../media/Instagram.svg";
import LinkedIn from "../../media/Linkedin.svg";

function Footer(props) {
  const [title, setTitle] = React.useState("Connect with us");
  const [size, setSize] = React.useState(null);

  const CopyEmail = () => {
    setTitle("rohan.chadha@mail.utoronto.ca");
    setSize("small");
    setTimeout(() => {
      setTitle("Connect with us");
      setSize(null);
    }, 10000);
  };

  return (
    <div className="footer">
      <h2 className={`white-font ${size}`}>{title}</h2>
      <div className="contact-block">
        <button onClick={CopyEmail}>
          <img src={Email} alt="Email" />
        </button>
        <button
          onClick={() => window.open("https://www.facebook.com/UTSCMCG/")}
        >
          <img src={FaceBook} alt="FaceBook" />
        </button>
        <button
          onClick={() => window.open("https://www.instagram.com/mcg_utsc/")}
        >
          <img src={Instagram} alt="Instagram" />
        </button>
        <button
          onClick={() =>
            window.open("https://www.linkedin.com/company/utscmcg/")
          }
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </button>
      </div>
      <h3 className="white-font">(c) 2021 MCG - Management Consulting Group</h3>
    </div>
  );
}

export default React.memo(Footer);

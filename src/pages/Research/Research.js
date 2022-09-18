import React, { useEffect } from "react";
import "./Research.css";
import Berkeley from "../../media/UC Berkeley - Haas 2019.pdf";
import Rotman from "../../media/Rotman Case Book.pdf";
import Columbia from "../../media/Columbia Casebook - 2002.pdf";
import Tuck from "../../media/TuckCaseBook2009.pdf";
import Partnership from "../../media/MCG 2022-2023 Partnership Package.pdf";
import Structure from "../../media/MCG Project Structure.pdf";
import Contract from "../../media/MCG Client Contract.pdf";

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer.js";
import File from "../../components/File/File.js";

import Rohan from "../../media/AlumniHeadshots/Rohan Chadha.jpg";

const intro = [
  'Research papers'
];

const files = [
  <File
    key={0}
    name="Insurance"
    picture={Rohan}
    link="https://www.linkedin.com/in/rohanchadhaa/"
  />
]

function Research(props) {
  return (
    <div className="root">
      <Background />
      <TopBar />
      <PageTitle title="Our Team" intro={intro} />
      <div className="members-wrapper animate__animated animate__fadeIn animate__delay-1s">
        <div className="members-grid">{files}</div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Research);

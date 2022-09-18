import React, { useEffect } from "react";
import "./Research.css";

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer.js";
import File from "../../components/File/File.js";

// media
import Insurance from "../../media/Insurance.pdf";
import InsuranceCover from "../../media/Insurance Cover.jpg";
import Metaverse from "../../media/Metaverse.pdf";
import MetaverseCover from "../../media/Metaverse Cover.jpg";

const intro = [
  ''
];

const files = [
  <File
    key={0}
    label="Finance"
    picture={InsuranceCover}
    link={Insurance}
  />,
  <File
    key={1}
    label="Marketing"
    picture={MetaverseCover}
    link={Metaverse}
  />
]

function Research(props) {
  return (
    <div className="root">
      <Background />
      <TopBar />
      <PageTitle title="Research" intro={intro} />
      <div className="files-wrapper animate__animated animate__fadeIn animate__delay-1s">
        <div className="files-grid">{files}</div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Research);

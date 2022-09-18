import React, { useEffect } from "react";
import "./Resources.css";
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
import Paragraph from "../../components/Paragraph/Paragraph.js";

const intro = [
  'Research papers'
];

function Research(props) {
  const [text, setText] = React.useState(null);

  useEffect(() => {
    renderParagraphs();
  }, []);

  const renderParagraphs = () => {
    let finalText = [];
    for (let i = 0; i < paragraphs.length; i++) {
      finalText.push(
        <Paragraph
          title={paragraphs[i].title}
          content={paragraphs[i].content}
        />
      );
    }
    setText(finalText);
  };

  return (
    <div className="root">
      <TopBar />
      <Background />
      <PageTitle title="Consulting Resources" intro={intro} />
      <div className="career-blur animate__animated animate__fadeIn animate__delay-1s">
        <div className="career-block">{text}</div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Research);

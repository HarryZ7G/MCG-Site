import React, { useEffect } from "react";
import "./About.css";

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer";
import Paragraph from "../../components/Paragraph/Paragraph.js";

const about = [
  `Since its inception in 2015, MCG has worked with a variety of businesses `,
  <mark className="purple">from start-ups to large legal firms</mark>,
  ` in order to create relevant short-term and long-term marketing, data, and financial strategy-based solutions.`,
];

const paragraphs = [
  {
    title: "About Us",
    content: (
      <h2>
        MCG is the premier professional club within the field of consulting at
        the University of Toronto Scarborough. MCG offers pro bono consulting
        services to a wide variety of organizations. The team includes
        departments in finance, marketing and information technology that
        provide tailored, implementable solutions to challenging business
        problems faced by our clients. In the past, MCG has worked with clients
        from technology, legal, consumer packaged goods, and NGO’s. MCG is also
        committed to contributing to student success in securing management
        consulting career opportunities through case competitions, networking
        events, recruitment preparation resources, etc.
      </h2>
    ),
  },
];

function About(props) {
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
      <Background />
      <TopBar />
      <PageTitle title="About" intro={about} />
      <div className="about-blur animate__animated animate__fadeIn animate__delay-1s">
        <div className="about-block">{text}</div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(About);

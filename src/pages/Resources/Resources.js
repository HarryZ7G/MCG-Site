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
  `Please note, this resource list is not exhaustive. It is to be `,
  `used as a starting point for your research into learning the fundamentals of `,
  `consulting and case interviews. MCG is not liable for any information `,
  `presented on through these websites/articles/books.`,
];

const paragraphs = [
  {
    title: "Consultation Documents:",
    content: (
      <h2>
        <ol className="links">
          <li>
            <a href={Partnership} target="_blank" rel="noreferrer">
              MCG 2022-2023 Partnership Package
            </a>
          </li>
          <li>
            <a href={Structure} target="_blank" rel="noreferrer">
              Typical Project Structure and Responsibilities
            </a>
          </li>
          <li>
            <a href={Contract} target="_blank" rel="noreferrer">
              Consultation Contract
            </a>
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Consulting Industry Overview:",
    content: (
      <h2>
        <ol className="links">
          <li>
            <a href={Berkeley} target="_blank" rel="noreferrer">
              UC Berkeley, Haas - 2019
            </a>
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Consulting Preparation Basics:",
    content: (
      <h2>
        <ol className="links">
          <li>
            <a
              href="https://www.caseinterview.com/free-case-interview-prep-program"
              target="_blank"
              rel="noreferrer"
            >
              CaseInterview - Largest Resource for Case Interview Preparation
            </a>
          </li>
          <li>
            <a
              href="https://mconsultingprep.com/"
              target="_blank"
              rel="noreferrer"
            >
              MConsultingPrep - Everyone Can Make It to Consulting
            </a>
          </li>
          <li>
            <a
              href="https://managementconsulted.com/"
              target="_blank"
              rel="noreferrer"
            >
              Management Consulted - Land that Dream Consulting Offer
            </a>
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Case Interview Specific Resources:",
    content: (
      <h2>
        <ol className="links">
          <li>
            <a
              href="https://igotanoffer.com/blogs/mckinsey-case-interview-blog/case-interview-maths"
              target="_blank"
              rel="noreferrer"
            >
              Case Interview Maths: The Ultimate Guide
            </a>
          </li>
          <li>
            <a
              href="https://www.myconsultingcoach.com/case-interview-consulting-math"
              target="_blank"
              rel="noreferrer"
            >
              Case Interview Math: A Comprehensive Guide
            </a>
          </li>
          <li>
            <a
              href="https://www.themuse.com/advice/ace-the-case-7-steps-to-cracking-your-consulting-interview"
              target="_blank"
              rel="noreferrer"
            >
              Ace the Case: 7 Steps to Cracking Your Consulting Interview
            </a>
          </li>
          <li>
            <a
              href="https://www.myconsultingcoach.com/case-interview"
              target="_blank"
              rel="noreferrer"
            >
              Case Interview: A Comprehensive Guide
            </a>
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Case Books:",
    content: (
      <h2>
        <ol className="links">
          <li>
            <a href={Rotman} target="_blank" rel="noreferrer">
              Rotman Management Casebook – 2013
            </a>
          </li>
          <li>
            <a href={Columbia} target="_blank" rel="noreferrer">
              Columbia Guidebook – 2002
            </a>
          </li>
          <li>
            <a href={Tuck} target="_blank" rel="noreferrer">
              Tuck Consulting Guide - 2009
            </a>
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Case Interview Videos:",
    content: (
      <h2>
        <ol className="links">
          <li>
            <a
              href="https://www.youtube.com/watch?v=6R5bT4cJh0A"
              target="_blank"
              rel="noreferrer"
            >
              Case Interview 101 - A great introduction to Consulting Case Study
              Interviews
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=kJDU_-sXt30"
              target="_blank"
              rel="noreferrer"
            >
              Virtual Case Interview
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=_KNl-eoWK00"
              target="_blank"
              rel="noreferrer"
            >
              Stuck in Case Interview - What to do & How to avoid?
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=_2KzCHSYnNY"
              target="_blank"
              rel="noreferrer"
            >
              Top 3 Tips for Case Interviews
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=orsNS3YG_KE"
              target="_blank"
              rel="noreferrer"
            >
              McKinsey Case Interview Example - Solved by ex-McKinsey Consultant
            </a>
          </li>
        </ol>
      </h2>
    ),
  },
];

function Resources(props) {
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
      <div className="animate__animated animate__fadeIn animate__delay-1s">
        <div className="career-block">{text}</div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Resources);

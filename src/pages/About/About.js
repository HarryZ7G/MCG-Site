import React, { useEffect } from "react";
import "./About.css";

// Components
import Paragraph from "../../components/Paragraph/Paragraph.js";
import Layout from "../../components/Layout/Layout";

const about = [
  `Since its inception in 2015, MCG has worked with a variety of businesses `,
  <mark className="purple">from start-ups to SMEs</mark>,
  ` in order to create relevant short-term and long-term marketing, data, and financial strategy-based solutions.`,
];

const pageDescription = 'Since its inception in 2015, MCG has worked with a variety of businesses from start-ups to large legal firms in order to create relevant short-term and long-term marketing, data, and financial strategy-based solutions.';

const paragraphs = [
  {
    title: "About Us",
    content: (
      <p>
        The Management Consulting Group (MCG) is the premier student consulting
        organization at the University of Toronto Scarborough (UTSC) campus. MCG
        focuses on helping students get real consulting experiences while
        enhancing their recruitment opportunities and skills. Students will have
        the chance to assist in consulting projects within organizations of
        different sizes and industries. MCG continuously focuses on building
        mutually beneficial relationships between consulting alumni and BBA
        students. Our engagements are filled by teams of highly talented student
        consultants receiving practical industry training, experience, and
        guidance from our advisors. Addtionally, MCG leverages talent and
        resources to organize events on-campus in support of BBA students.
      </p>
    ),
  },
  {
    title: "Our Mission",
    content: (
      <p>
        Since its inception in 2015, the group's goal has been two-fold: to
        provide students with a realistic glimpse of what consulting is like,
        but also to equip them with hands on experience through working with
        clients. MCG has worked with a variety of businesses from start-ups to
        corporations to Universities, in order to create relevant short-term and
        long-term marketing, data, and financial strategy-based solutions. Aside
        from working with clients, MCG has hosted case competitions with BCG and
        created mentorship programs with consultants from Monitor Deloitte, P&G,
        EY, & BCG to create and cultivate a genuine interest in consulting at
        the University of Toronto campus.
      </p>
    ),
  },
  {
    title: "Core Objectives",
    content: (
      <>
        <p>MCG strives to add value for both clients and students by:</p>
        <ol>
          <li>
            Solving clients' toughest issues and helping to make long-lasting
            impacts within the community.
          </li>
          <li>
            Recruiting the brightest and most diverse talent from campus and
            providing these students with valuable hands-on consulting
            experience. This includes participation in all stages of the consulting
            process, from strategic analysis and formulation to presentation and
            implementation.
          </li>
          <li>
            Enriching the student community through various educational events
            and workshops.
          </li>
          <li>
            Helping equip members with the necessary knowledge and tools needed
            to successfully launch a career in consulting.
          </li>
        </ol>
      </>
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
    <Layout headerTitle='About' headerIntro={about} title='About' description={pageDescription} useBackground>
      <div className="about-blur animate__animated animate__fadeIn animate__delay-1s">
        <div className="about-block">{text}</div>
      </div>
    </Layout>
  );
}

export default React.memo(About);

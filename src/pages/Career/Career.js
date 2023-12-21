import React, { useEffect } from "react";
import styles from "./Career.module.css";
import OrganizationalChart from "../../media/OrganizationalChart.svg";

// Components
import Paragraph from "../../components/Paragraph/Paragraph.js";
import FAQuestion from "../../components/FAQuestion/FAQuestion";
import { questions } from "./FAQ"
import Layout from "../../components/Layout/Layout";

const paragraphs = [
  {
    title: "Come join MCG!",
    content: (
      <>
        <p>New openings at MCG allow new students to join our teams, with most hiring occurring at the end of Winter and the start of Fall.</p>
        <em>We are currently hiring for the roles of Senior Partner and Analyst Consultant. Submissions are due January 7th, 2024 at 11:59pm.</em>
      </>
    )
  },
  {
    title: "Open Positions",
    content: (
      <>
        <hr />
        <h2 className="purple-font">Senior Partner</h2>
        <p>As a Senior Partner (Vice President) at MCG, you will communicate with founders/executives directly and lead a team of highly skilled consultants and analysts to develop financial models to aid in the consulting projects. You will structure the case and develop strategies to help meet a client's short and long-term goals, such as profit maximization, cost optimization, market penetration, etc. Your role will guide the market research, customer segmentation, and industry/competitive analyses to provide creative and strategic solutions. Also, you will guide students' proposals and point them to the right resources to advance their business projects on an ongoing basis. You will gain exposure to solving a variety of problems commonly seen within marketing departments.</p>
        <em>What we're looking for:</em>
        <ol>
          <li>Supreme strategic problem-solving skills and structured, analytical thinking shown in your previous client-facing/consulting experience.</li>
          <li>Creative ability to innovate and implement a new strategy to exploit commercial opportunities, in addition to being well-versed with industry trends.</li>
          <li>Experience in finance/marketing/technology and demonstrated high level of professionalism and sense of responsibility.</li>
          <li>Proficient in excel and ppt, proficiency in python, R, or other data analysis tools will an asset and motivated to learn new functionalities.</li>
          <li>Demonstrated high standard of communication skills and experience facing clients and  leading/working within management clubs is an asset.</li>
          <li>Be willing to dedicate at least 25 hours in a project.</li>
        </ol>
        <hr />
        <h2 className="purple-font">Analyst Consultant</h2>
        <p>As an analyst at MCG, you will support the team to complete high-quality consultations. You will conduct market research and provide critical insights to help meet a client's short and long-term goals, such as profit maximization, cost optimization, market penetration, etc. You will be involved in client meetings and internal discussions to understand the business situations and deliver recommendations. Also, you will be provided with the opportunities to present to the clients and receive feedback and guidance.</p>
        <em>What we're looking for: </em>
        <ol>
          <li>Strong problem-solving skills and structured, analytical thinking.</li>
          <li>Proven research skills and be able to leverage professional/library resource to analyze business situations.</li>
          <li>Proficient in excel and ppt, proficiency in Python, R, or other data analysis tools will an asset and motivated to learn new functionalities.</li>
          <li>Demonstrated good communication and teamwork skills and experience working within management clubs is an asset.</li>
          <li>Be willing to dedicate at least 20 hours in a project.</li>
        </ol>
        <hr />
        <br />
      </>
    ),
  },
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
        guidance from our advisors. Additionally, MCG leverages talent and
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
        <p>
          MCG strives to add value for both clients and students by:</p>
        <ul>
          <li>
            Solving clients toughest issues and helping to make a long-lasting
            impact within the community.
          </li>
          <li>
            Recruiting the brightest and most diverse talent from campus and
            providing these students with valuable hands-on consulting
            experience; via participating in all stages of the consulting
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
        </ul>
      </>
    ),
  },
  {
    title: "Organizational Structure",
    content: <img src={OrganizationalChart} className={styles.organizationalChart} alt="org-chart" />,
  },
  {
    title: 'Frequently Asked Questions',
    content: questions.map(item => <FAQuestion {...item} />)
  }
];

function Career(props) {
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
    <Layout headerTitle='Hiring' title='Hiring Board' description='View descriptions and application links for open positions at Management Consulting Group.' useBackground>
      <div className={styles.careerBlock}>
        {text}
        <a
          href="https://docs.google.com/forms/d/1QkK7_OXCK2SMPBKxy_EDXJdaU7Rv7G8fcbyPl5SaVeU"
          target="_blank"
          rel="noreferrer"
          className={styles.applyButton}
        >
          <button>
            <h2 className="white-font">Apply now</h2>
          </button>
        </a>
      </div>
    </Layout>
  );
}

export default React.memo(Career);

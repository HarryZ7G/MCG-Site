import React, { useEffect } from "react";
import "./Career.css";
import OrganizationalChart from "../../media/OrganizationalChart.png";

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer.js";
import Paragraph from "../../components/Paragraph/Paragraph.js";

const paragraphs = [
  {
    title: "About Us",
    content: (
      <h2>
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
      </h2>
    ),
  },
  {
    title: "Our Mission",
    content: (
      <h2>
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
      </h2>
    ),
  },
  {
    title: "Core Objectives",
    content: (
      <h2>
        MCG strives to add value for both clients and students by:
        <ul>
          <li>
            Solving clients toughest issues and helping to make a long-lasting
            impact within the Community.
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
      </h2>
    ),
  },
  {
    title: "Organizational Chart (as of Fall 2022):",
    content: <img src={OrganizationalChart} width="100%" alt="org-chart" />,
  },
  {
    title: "Director, Operations:",
    content: (
      <h2>
        As an Operations Director, your role will include establishing MCG's
        brand within the student community as well as externally. Your goal is
        to provide students with practical and relevant skills applicable in a
        real-world setting. If you are interested in using your creativity and
        project management experience to provide students with a realistic
        understanding of consulting and bridge the gap between students and
        corporate environments, this is the role for you!
        <hr />
        <b>What we're looking for:</b>
        <ol>
          <li>
            Detail oriented - Capable of recognizing minor details to
            effectively organize a smoothly operated event.
          </li>
          <li>Collaboration and interpersonal skills - a great team player.</li>
          <li>
            Communication (oral and written) and presentation skills - in order
            to reach out to with industry professionals and fellow students.
          </li>
          <li>
            Ability to plan and execute comprehensive logistics for an event.
          </li>
          <li>
            Strong negotiation, and persuasive skills. (experience with sales is
            a bonus!)
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Director, Marketing:",
    content: (
      <h2>
        As a Marketing Director, your role will include establishing MCG's brand
        and advertising strategies through all communication channels. You will
        be working closely with the department in developing content and
        marketing campaigns for the club. If you are passionate about digital
        media and passionate about marketing, this role is for you!
        <hr />
        <b>What we're looking for:</b>
        <ol>
          <li>
            Good understanding of social media analytics and implementation of
            social media strategies.
          </li>
          <li>
            Knowledge of design. (experience with Photoshop, Canva, etc. is a
            plus!)
          </li>
          <li>
            Strong interpersonal skills to work closely within the club and
            external stakeholders.
          </li>
          <li>Confident to bring new ideas and strategies to the table.</li>
          <li>Communication (oral and written) and presentation skills.</li>
          <li>
            Strong willingness to learn and enthusiasm about the branding of the
            organization.
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Director, IT:",
    content: (
      <h2>
        As an IT Director, you will be responsible for meeting the technical
        needs of the team. You will have the opportunity to develop, manage, and
        oversee MCG’s brand through our website and improve its functionality.
        The IT Director will further be responsible for the management, redesign
        and optimization of existing communication pipelines and hiring process
        for efficiency.
        <hr />
        <b>What we're looking for:</b>
        <ol>
          <li>Knowledge/Experience with HTML, CSS, JavaScript, and React.</li>
          <li>
            Good understanding of web development to design and modify layout
            and functionality of our website.
          </li>
          <li>Communication (oral and written) and organizational skills.</li>
          <li>Strong attention to detail and willingness to learn.</li>
          <li>
            Ability to conceptualize ideas and translate visions onto the
            digital space.
          </li>
          <li>
            Self-motivated with the ability to produce innovative and creative
            ideas.
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Consultant, Financial Strategy:",
    content: (
      <h2>
        As a Financial Strategy Consultant, you will assist the Partner in
        developing financial models to aid in the consulting projects. Models
        may include - revenue forecasting, cost analyses for a given
        strategy/project and prudent financial budgeting/planning. These models
        might include revenue forecasting for a client’s future earnings and
        expansions, cost analyses for a given strategy or project, and financial
        budgeting/planning. You will develop strategies to help meet a client’s
        financial goals, such as cost reductions or profit maximization for
        their businesses.
        <hr />
        <b>What we're looking for:</b>
        <ol>
          <li>
            A keen interest in Finance, Accounting, Tax, or similar Business
            disciplines and high academic achievement in Accounting and Finance
            courses is an asset.
          </li>
          <li>
            Proficient in Excel and motivated to learn new functionalities.
          </li>
          <li>
            Supreme strategic problem-solving skills and analytical thinking.
          </li>
          <li>
            Demonstrated high standard of communication skills and experience
            working within teams is an asset.
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Consultant, Marketing Strategy",
    content: (
      <h2>
        As a Marketing Strategy Consultant, you will assist the Partner in
        conducting market research, customer segmentation, competitors and
        industry analysis. You will gain exposure to solving a variety of
        problems commonly seen within marketing departments. This includes
        creating advertising, branding, and/or go-to-market strategies, in
        addition to evaluating the success of a project based on your research
        and the support of the other functions.
        <hr />
        <b>What we're looking for:</b>
        <ol>
          <li>
            Creative ability to innovate and implement a new marketing strategy
            to exploit commercial opportunities.
          </li>
          <li>
            Passionate about Marketing related concepts and best practices.
          </li>
          <li>Proficient in MS Office。 (PowerPoint and Excel)</li>
          <li>Ability to think strategically and analytically.</li>
          <li>
            Demonstrated high standard of communication skills and experience
            working within teams is an asset.
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Consultant, Technology Consulting",
    content: (
      <h2>
        As a Technology Consultant, your work will primarily focus on providing
        support in delivering technology recommendation and vendor selection to
        aid in the consulting projects through technology transformation.
        Working with our Senior Partners, you will learn how to leverage
        technology to achieve business goals. You will also work with clients to
        learn about their specific case needs, assess their technology
        infrastructure and provide solutions for improvement. This position will
        help you gain exposure to a variety of areas, including software
        development, cybersecurity, data analytics, cloud computing, artificial
        intelligence, etc.
        <hr />
        <b>What we're looking for:</b>
        <ol>
          <li>
            A keen interest in Technology, Data Analytics, Business Intelligence
            or related fields.
          </li>
          <li>
            Proficient in Excel and motivated to learn new functionalities using
            new frameworks and technical tools.
          </li>
          <li>
            Supreme strategic problem-solving skills, analytical thinking and
            research abilities.
          </li>
          <li>
            Demonstrated high standard of communication skills and experience
            working within teams is an asset.
          </li>
          <li>
            Experiences with technology consulting and vendor selection is an
            asset.
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Frequently Asked Questions",
    content: (
      <h2>
        <b>
          Q: What are some of the sample Industries & Client Problems
          (Previously):
        </b>
        <br />
        <b>A:</b> App Development – Created a data-driven plan to improve an app’s growth and retention rates.
        <br />
        &emsp;&nbsp;Non-Profit – Created a digital transformation plan to migrate a business online in lieu of COVID-19.
        <br />
        &emsp;&nbsp;Healthy Foods – Created a marketing plan to help a company improve their market share. 
        <br />
        &emsp;&nbsp;Entertainment – Created a marketing & sales strategy along with financial improvements.
        <hr />
        <b>Q: Why should I join MCG?</b>
        <br />
        <b>A:</b> As one of the only external facing clubs (aside from UTSC
        Student Managed Fund), joining MCG as a consultant will allow for you to
        truly develop hands-on and practical skills necessary for the workforce.
        You will work with real companies and clients and develop key technical
        abilities deemed extremely valuable to future employers. Moreover, you
        will be able to actively help businesses develop and work alongside a
        team of like-minded individuals in achieving your goals.
        <hr />
        <b>Q: I applied to another club, can I still apply to MCG?</b> <br />
        <b>A:</b> Yes, MCG is excluded from the UTSC one-club policy. As such,
        you will be able to be a part of any other management club and still be
        eligible to join MCG!
        <hr />
        <b>
          Q: Are MCG’s client’s real companies and organizations or are they
          just case studies?
        </b>
        <br />
        <b>A:</b> The clients we will be consulting for are real businesses and
        organizations. As part of the engagement, students will meet these
        professionals to identify issues and figure out what solution they are
        looking for.
        <hr />
        <b>Q: Is this a paid opportunity?</b>
        <br />
        <b>A:</b> No. Certain clients will offer sponsorship in exchange for the
        pro bono services received, however those funds are inserted back into
        the club and will not be distributed as dividends to any member as
        payment.
        <hr />
        <b>Q: What are the club’s rules regarding confidentiality?</b>
        <br />
        <b>A:</b> Our organization upholds confidentiality to the highest degree
        and expects each of its members to do the same. The information provided
        by our clients is incredibly sensitive and we ensure 100%
        confidentiality throughout the engagement. To establish this, all
        members must sign a Non-Disclosure Agreement (NDA) before commencing
        work on a client, to ensure that all students are individually liable
        for maintaining this high standard.
      </h2>
    ),
  },
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
    <div className="root">
      <TopBar />
      <Background />
      <PageTitle title="Hiring" />
      <div className="career-blur animate__animated animate__fadeIn animate__delay-1s">
        <div className="career-block">{text}</div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSddCwne_po4kkRS9iR_CzQSCGpAwoqgxHwrB7jCR5xhjqsdJA/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            <h2 className="white-font">Apply now</h2>
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Career);

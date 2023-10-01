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
    title: "Come join MCG!",
    content: (
      <>
      <h2>New openings at MCG allow new students to join our teams, with most hiring occurring at the end of Winter and the start of Fall.</h2>
      <h2>Unfortunately, there are no positions currently open.</h2>
      </>
    )
  },
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
        <p>
          There are no positions currently open.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Career);

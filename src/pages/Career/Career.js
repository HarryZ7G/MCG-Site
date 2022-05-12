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
    title: "About Management Consulting Group:",
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
  {
    title: "General Responsibilities (All):",
    content: (
      <h2>
        <ul>
          <li>
            In addition to your role-specific responsibilities, Senior Partners
            represent the MCG’s Senior Leadership and will work alongside the
            whole team (Managing Partners, Consultants, Analysts) in
            spearheading the problem-solving process for our clients and
            assisting in growing MCG’s brand externally.
          </li>
          <br />
          <li>
            As a Senior Partner, you will lead a team of 2-5
            consultants/analysts for your department and maintain a key position
            in the client-engagement cycle for maximizing our client’s
            satisfaction. You will also be able to gain exposure towards
            developing team leadership experiences necessary in the workplace.
          </li>
          <br />
          <li>
            You will be responsible for delivering innovative solutions to our
            client’s needs and in doing so, gain exposure to working with new
            tools (softwares, applications etc) as well as develop new
            opportunities for your team to learn crucial skills in the
            consulting industry.
          </li>
        </ul>
      </h2>
    ),
  },
  {
    title: "Organizational Chart:",
    content: <img src={OrganizationalChart} width="100%" />,
  },
  {
    title: "Partner, Financial Strategy (x1):",
    content: (
      <h2>
        As the Senior Partner of Financial Strategy at MCG, you will lead a team
        of highly skilled consultants and analysts to develop financial models
        to aid in the consulting projects. These models might include revenue
        forecasting for a client’s future earnings and expansions, cost-benefit
        analyses for a given strategy or project, identification and
        optimization of relevant risks, and financial budgeting/planning. You
        will develop strategies to help meet a client’s financial goals, such as
        cost reductions or profit maximization for their businesses. Also, you
        will guide students’ proposals and point them to the right resources to
        advance their business projects from a financial perspective on an
        ongoing basis.
      </h2>
    ),
  },
  {
    title: "What we’re looking for:",
    content: (
      <h2>
        <ol>
          <li>
            A keen interest in finance demonstrated through high academic
            achievement in UTSC finance courses, relevant industry experience,
            and personal projects.
          </li>
          <li>
            Proficient in excel, python, R, or other data analysis tools and
            motivated to learn new functionalities.
          </li>
          <li>
            Supreme strategic problem-solving skills and structured, analytical
            thinking.
          </li>
          <li>
            Demonstrated high standard of communication skills and experience
            working within management clubs is an asset.
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Partner, Marketing Strategy (x1)",
    content: (
      <h2>
        As the Senior Partner of Marketing Strategy, you will lead highly
        skilled analysts and consultants to create and develop strategic plans
        to assist the clients from a marketing perspective. Your role will guide
        the market research, customer segmentation, and industry/competitive
        analyses to provide creative and strategic solutions. You will gain
        exposure to solving a variety of problems commonly seen within marketing
        departments. This includes creating advertising, branding, and
        go-to-market strategies, in addition to evaluating the success of a
        project based on your teams’ research and the support of the other
        functions.
      </h2>
    ),
  },
  {
    title: "What we’re looking for:",
    content: (
      <h2>
        <ol>
          <li>
            Creative ability to innovate and implement a new marketing strategy
            to exploit commercial opportunities, in addition to being
            well-versed with modern marketing trends.
          </li>
          <li>
            Demonstrated interest in marketing through high academic achievement
            in courses, relevant industry experience, and personal projects.
          </li>
          <li>
            Proficient with analytical tools like excel, python, etc. to conduct
            data-driven testing and extract applicable insights is considered an
            asset.
          </li>
          <li>
            Supreme strategic problem-solving skills, structured, analytical
            thinking and research experience is an asset.
          </li>
          <li>
            Demonstrated high standard of communication skills and experience
            working within campus clubs is an asset.
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Partner, Information Technology & Data Analytics (x1):",
    content: (
      <h2>
        The Senior Partner of IT & Data Analytics will consult clients on
        website strategies, application development, and user experience
        optimization. You will also guide analysts and consultants to engineer
        data-driven strategies to aid in the consulting projects. You will
        mentor the analysts and consultants on programmable tools like excel,
        power BI, python, etc. to analyze datasets. Due to the pandemic, more
        clients require services in the digital transformation process and the
        IT Analytics department will play a key role in providing those
        services. You will gain exposure to real companies and be able to
        measure the success of your recommendations in their digital strategy
        over time. You will also be able to develop your professional
        communication skills, and earn valuable experience, furthering
        developing the practical applicability of your technical skills.
      </h2>
    ),
  },
  {
    title: "What we’re looking for:",
    content: (
      <h2>
        <ol>
          <li>
            Currently enrolled in a computer science, statistics, Management &
            IT, or similar discipline.
          </li>
          <li>
            Demonstrated interest in computer science through high academic
            achievement in courses, relevant industry experience, and personal
            projects.
          </li>
          <li>
            Supreme strategic problem-solving skills, structured, analytical
            thinking and research experience is an asset.
          </li>
          <li>
            Demonstrated high standard of communication skills and experience
            working within campus clubs is an asset.
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "VP, Public Relations (x1)",
    content: (
      <h2>
        The Vice President of Public Relations will develop and oversee MCG’s
        brand, operations, and promotional strategies. You will create a strong
        presence for the group and ensure cohesive communication channels.
        Planning and executing strategic initiatives that increase the awareness
        and interest in MCG will be a regular function of your role. Your
        responsibilities will also include monitoring and measuring the
        effectiveness of marketing campaigns to ensure brand consistency. The
        VP, Public Relations will also support the group’s goal to provide
        students with a realistic glimpse of what consulting is like through
        efficient logistical support for MCG led events.
      </h2>
    ),
  },
  {
    title: "What we’re looking for:",
    content: (
      <h2>
        <ol>
          <li>
            Supervise and coordinate with Directors and other team executives,
            along with external partners to ensure that MCG’s operations run
            effectively.
          </li>
          <li>
            Strong leadership skills demonstrated through past leadership
            opportunities.
          </li>
          <li>Excellent written and verbal communication skills.</li>
          <li>Problem solver with the ability to take initiative.</li>
          <li>
            Strong time management skills in order to keep up with upcoming
            deadlines for events. Previous experience with handling and
            organizing multiple deadlines and priorities is considered an asset.
          </li>
        </ol>
      </h2>
    ),
  },
  {
    title: "Director, Operations (x1):",
    content: (
      <h2>
        As an Operations Director, your role will include establishing MCG's
        brand within the student community as well as externally. Your goal is
        to provide students with practical and relevant skills applicable in a
        real-world setting. If you are interested in using your creativity and
        project management experience to provide students with a realistic
        understanding of consulting and bridge the gap between students and
        corporate environments, this is the role for you!
      </h2>
    ),
  },
  {
    title: "What we’re looking for:",
    content: (
      <h2>
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
    title: "Director, Marketing (x1):",
    content: (
      <h2>
        As a Marketing Director, your role will include establishing MCG's brand
        and advertising strategies through all communication channels. You will
        be working closely with the department in developing content and
        marketing campaigns for the club. If you are passionate about digital
        media and passionate about marketing, this role is for you!
      </h2>
    ),
  },
  {
    title: "What we’re looking for:",
    content: (
      <h2>
        <ol>
          <li>
            Good understanding of social media analytics and implementation of
            social media strategies.
          </li>
          <li>
            Knowledge of design. (experience with PhotoShop, Canva, etc. is a
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
    title: "Frequently Asked Questions",
    content: (
      <h2>
        <b>
          Q: What are some of the sample Industries & Client Problems
          (Previously):
        </b>
        <br />
        <b>A:</b> App Development – Created a data-driven plan to improve an
        app’s growth and retention rates Non-Profit – Created a digital
        transformation plan to migrate a business online in lieu of COVID-19
        Healthy Foods – Created a marketing plan to help a company improve their
        market share Entertainment – Created a marketing & sales strategy along
        with financial improvements.
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
          href="https://docs.google.com/forms/d/e/1FAIpQLSfMzrV_hU9M_7OATsZ8lnc-48-24graV-OPr2rNOvZy0KjKzQ/viewform?usp=sf_link"
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

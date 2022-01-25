import React from "react";
import "./Services.css";

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer";
import Service from "../../components/Service/Service";

const serviceTexts = [
  <h2 className="service-text">
    MCG’s Financial Strategy team offers: Financial Analysis and Modelling (e.g.
    Valuation, Projections), Pricing Analysis (Optimal, Competitive,
    Sensitivity), Budgeting Strategy Data-driven strategic advisory, Target
    Market Identification, and Industry Research. <br />
    <br /> The Finance Strategy department conducts a thorough analysis of the
    financial infrastructure of the client to optimize financial efficiency. Our
    consultants provide clients with relevant key insights and promote both
    sustainable change and operational efficiency. Depending on the needs of the
    clients, the department will apply financial modelling techniques to extract
    innovative solutions for the client to achieve their goals. Our team
    utilizes their economic and financial knowledge to ensure that our clients
    are maximizing their potential and capabilities through data-driven
    decisions.
  </h2>,
  <h2 className="service-text">
    MCG’s IT & Data Analytics team offers: insight and suggestions for coding
    and data analysis, Assist clients to select the optimum programming language
    and code structure, Offer insight into the tech field, industry trends and
    market data. <br /> <br />
    The IT & Data Analytics team is to support the feasibility of new strategies
    with coding and data, prove or disprove current hypothesized company
    problems by backing them with qualitative and quantitative information and
    play a general support role for any task or problem that requires data
    analysis and technical support. Our team uses a logical, methodical approach
    in using data that can be used to add value to any problem. Our team is
    familiar with analysis tools such as SQL, Python, Excel tools, and VBA and
    uses those tools to help the company to identify trends, issues, and tell
    stories.
  </h2>,
  <h2 className="service-text">
    MCG’s Marketing Strategy team offers: Market Research, Industry/ Competitive
    Analysis, Campaign Planning & Assistance, and Branding Guidelines &
    Strategy. <br /> <br /> The marketing strategy team specializes in marketing
    to provide clients with the most cutting-edge, effective and innovative
    marketing solutions to meet the client’s needs and help their business grow.
    With access to the largest academic repository in Canada and audited by
    leading researchers and professors at the University of Toronto, our team is
    able to provide the latest research-backed recommendations in understanding
    market capacity, trends, growth, changes in consumers' preferences and more.
  </h2>,
  <h2 className="service-text">
    MCG’s Public Relations team helps MCG to increase awareness about the club
    on campus and develop long-lasting relationships with clients, provide
    practical experience and expand knowledge about the consulting industry
    among the student body. <br /> <br />
    The Public Relations team is responsible for maintaining and acquiring new
    partnerships, expanding the associations’ network. The department actively
    creates and develops organizational culture and social media platforms
    through the processes of recruitment, integration, and development.
  </h2>,
];

function Services(props) {
  return (
    <div className="root">
      <Background />
      <TopBar />
      <PageTitle title="Services" />
      <div className="services-blur animate__animated animate__fadeIn animate__delay-1s">
        <div className="services-block">
          <Service title="Financial Strategy" text={serviceTexts[0]}/>
          <Service title="IT & Data Analytics" text={serviceTexts[1]}/>
          <Service title="Marketing Strategy" text={serviceTexts[2]}/>
          <Service title="Public Relations" text={serviceTexts[3]}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Services);

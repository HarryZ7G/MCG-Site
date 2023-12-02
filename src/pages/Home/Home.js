import React from 'react';
import './Home.css';

// Media
import Finance from "../../media/Finance.svg";
import IT from "../../media/Programmer.svg";
import Marketing from "../../media/Marketing.svg";
import PR from "../../media/Feedback.svg";

// Components
import Background from '../../components/Background/Background.js';
import TopBar from '../../components/TopBar/TopBar.js';
import ServiceElement from '../../components/ServiceElement/ServiceElement.js';
import Footer from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet';

function Home(props) {
  return (
    <div className="root">
      <Background/>
      <TopBar/>
      <Helmet>
        <title>UTSC - MCG</title>
        <meta type='description' content="Making meaningful impacts — one consultation at a time — we are University of Toronto Scarborough's premier consulting group."/>
      </Helmet>

      <div className="landing-screen">
        <h1 className="landing-title animate__animated animate__fadeIn animate__delay-05s">
          Making <mark className="purple">meaningful impacts</mark> in the community — one consultation at a time
        </h1>
        <h2 className="animate__animated animate__fadeIn animate__delay-05s">
          We are University of Toronto Scarborough’s premier consulting group.
        </h2>
      </div>

      <div className="animate__animated animate__fadeIn animate__delay-05s">
        <div className="service-container">
          <h1 className="purple-font animate__animated animate__fadeIn animate__delay-1s">
            Services
          </h1>
          <div className="service-block animate__animated animate__fadeIn animate__delay-1s">
            <div className="service-row">
              <ServiceElement
                title="Financial Strategy"
                description="Analyze financial infrastructure of clients to optimize financial efficiency"
                image={Finance}
              />
              <ServiceElement
                title="IT & Data Analytics"
                description="Provide insight and suggestion for coding and statistics"
                image={IT}
              />
            </div>
            <div className="service-row">
              <ServiceElement
                title="Marketing Strategy"
                description="Provide marketing strategy solutions and identify industry trends"
                image={Marketing}
              />
              <ServiceElement
                title="Public Relations"
                description="Increase awareness about the club on campus and develop long lasting relationships with clients"
                image={PR}
              />
            </div>
          </div>
        </div>
        
        <div className="landing-words">
          <h1>4 <mark className="purple">Practice Areas</mark></h1>
          <h1>6 Annual <mark className="purple">Clients</mark></h1>
          <h1>8 Years of <mark className="purple">Experience</mark></h1>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Home;
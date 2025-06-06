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
import PageHelmet from '../../components/PageHelmet/PageHelmet';
import HomeEvent from '../../components/HomeModules/HomeEvent/HomeEvent.js';
import HomeResources from '../../components/HomeModules/HomeResources/HomeResources.js'
import HomeStats from '../../components/HomeModules/HomeStats/HomeStats.js';
import ResearchArticlesPreview from '../../components/ResearchArticlesPreview/ResearchArticlesPreview';

function Home() {
  return (
    <div className="home-container">
      <Background />
      <TopBar />
      <PageHelmet title='Management Consulting Group (MCG)'
        description="Making meaningful impacts — one consultation at a time — we are University of Toronto Scarborough's premier consulting group.">
      </PageHelmet>
      <div className="landing-screen">
        <h1 className="landing-title animate__animated animate__fadeIn animate__delay-05s">
          Making <mark className="purple">meaningful impacts</mark> in the community — one consultation at a time
        </h1>
        <h2 className="animate__animated animate__fadeIn animate__delay-05s">
          We are University of Toronto Scarborough's premier consulting group.
        </h2>
      </div>

      <div className="animate__animated animate__fadeIn animate__delay-05s">
        <div className="service-container">
          <h1 className="purple-font animate__animated animate__fadeIn animate__delay-1s">
            Services
          </h1>
          <div className="service-block animate__animated animate__fadeIn animate__delay-1s">
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
      <HomeEvent />
      <HomeStats />
      <ResearchArticlesPreview/>
      <HomeResources />
      <Footer />
    </div>
  )
}

export default Home;
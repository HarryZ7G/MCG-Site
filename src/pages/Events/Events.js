import React from "react";
import "./Events.css";

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Event from "../../components/Event/Event";
import Footer from "../../components/Footer/Footer";

// media
import NetworkingNight from "../../media/NetworkingNight.jpg";
import BridgeFinanceLab from "../../media/BridgeFinanceLab.jpg"

function Events(props) {
  return (
    <div className="root">
      <TopBar />
      <Background />
      <PageTitle title="Events" />
      <div className="event-blur animate__animated animate__fadeIn animate__delay-1s">
        <div className="event-block">
          <Event
            day="October 5th"
            date={{ day: 5, month: 10, year: 2022 }}
            image={ConsultingDay}
            title="Consulting Day"
            start="6:00 PM"
            end="8:00 PM"
            location="IC Atrium"
            link="https://docs.google.com/forms/d/e/1FAIpQLSeCDp6XewmTo-U4Bv4O3NAFMUHqhZZoScMRzefuEXRdqy9bgA/viewform?usp=sf_link"
          />
          <Event 
            day="September 28"
            date={{day: 28, month: 9, year: 2023}}
            image={BridgeFinanceLab}
            title="Case Analysis Workshop with Maria Shibaeva"
            start="5:00 PM"
            end="8:00 PM"
            location="IC Building, Finance Lab"
            link=""
            status="Registration opens soon."
          />
          <Event
            day="October 3"
            date={{ day: 3, month: 10, year: 2023}}
            image={NetworkingNight}
            title="Power Connect: Career Insights & Recruiter Roundtable"
            start="6:00 PM"
            end="8:00 PM"
            location="IC Atrium"
            link=""
            status="Registration not yet open."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Events);

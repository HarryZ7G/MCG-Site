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

function Events(props) {
  return (
    <div className="root">
      <TopBar />
      <Background />
      <PageTitle title="Events" />
      <div className="event-blur animate__animated animate__fadeIn animate__delay-1s">
        <div className="event-block">
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

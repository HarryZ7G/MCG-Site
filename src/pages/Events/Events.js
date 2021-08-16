import React from "react";
import "./Events.css";

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Event from "../../components/Event/Event";
import Footer from "../../components/Footer/Footer";

function Events(props) {
  return (
    <div className="root">
      <TopBar />
      <Background />
      <PageTitle title="Events" />
      <div className="event-blur animate__animated animate__fadeIn animate__delay-1s">
        <div className="event-block">
          <h1 className="event-month purple-font">Aug</h1>
          <Event
            day="7th - 8th"
            date={{ day: 8, month: 8, year: 2021 }}
            weekday="Weekend"
            title="Acumin Information Session"
            start="1:00 PM"
            end="4:00 PM"
            location="Online"
          />
          <Event
            // day="TBD"
            weekday="TBD"
            title="Impact Consulting Information Session"
            start="TBD"
            end="TBD"
            location="TBD"
          />
          <h1 className="event-month purple-font">Oct</h1>
          <Event
            // day="TBD"
            weekday="TBD"
            title="P&G Information Session"
            start="TBD"
            end="TBD"
            location="TBD"
          />
          <h1 className="event-month purple-font">Nov</h1>
          <Event
            // day="TBD"
            weekday="TBD"
            title="Accenture Information Session"
            start="TBD"
            end="TBD"
            location="TBD"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Events);

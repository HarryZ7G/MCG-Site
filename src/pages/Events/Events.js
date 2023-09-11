import React from "react";
import "./Events.css";

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Event from "../../components/Event/Event";
import RecurringEvent from "../../components/Event/RecurringEvent";
import Footer from "../../components/Footer/Footer";

// media
import ConsultingDay from "../../media/ConsultingDay.jpg";
import CaseComp from "../../media/CaseComp.jpg";
import WiC from "../../media/WiC.jpg";
import Buddy from "../../media/BuddyProgram.jpg";

function Events(props) {
  return (
    <div className="root">
      <TopBar />
      <Background />
      <PageTitle title="Events" />
      <div className="event-blur animate__animated animate__fadeIn animate__delay-1s">
        <div className="event-block">
          <h2>
            Stay tuned for upcoming events!
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Events);

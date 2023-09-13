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
            day="September 18"
            date={{day: 18, month: 9, year: 2023}}
            image={BridgeFinanceLab}
            title="Industry Research Workshop with Mariana from TheBRIDGE"
            start="1:30 PM"
            end="2:30 PM"
            location="IC Building, Finance Lab"
            link="https://docs.google.com/forms/d/e/1FAIpQLSe6W6obWzjbVkYhj6Yq9s9T77cwXWL6-Owks4ACR2Mob83txA/viewform"
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
            day="November 30th"
            date={{ day: 30, month: 11, year: 2022 }}
            image={CaseComp}
            title="Consulting Case Competition"
            start="5:00 PM"
            end="8:30 PM"
            location="The BRIDGE"
            link="https://forms.gle/SGM3XkHxVaJwtV4cA"
          />
          <Event
            day="February 6th"
            date={{ day: 6, month: 2, year: 2023 }}
            image={WiC}
            title="Women in Consulting"
            start="6:00 PM"
            end="7:30 PM"
            location="EV 151-152 Catalyst Center"
            link="https://forms.gle/MYRDzTdFHydchpHr5"
          />
          <RecurringEvent
            frequency="Bi-Weekly"
            image={Buddy}
            title="Consulting Case Buddy Program"
            link="https://forms.gle/nkmLSRE3Dq5ELyCEA"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Events);

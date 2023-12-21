import React from "react";
import "./Events.css";

// Components
import Event from "../../components/Event/Event";

// media
import NetworkingNight from "../../media/NetworkingNight.jpg";
import BridgeFinanceLab from "../../media/BridgeFinanceLab.jpg"
import Layout from "../../components/Layout/Layout";

function Events(props) {
  return (
    <Layout
      headerTitle='Events'
      title='Events'
      description='Throughout the year, MCG organizes events such as workshops, panels, and networking events for the community.'
      useBackground
    >
      <div className="event-block">
        <Event
          day="September 18th"
          date={{ day: 18, month: 9, year: 2023 }}
          image={BridgeFinanceLab}
          title="Industry Research Workshop with Mariana from TheBRIDGE"
          start="1:30 PM"
          end="2:30 PM"
          location="IC Building, Finance Lab"
          link="https://docs.google.com/forms/d/e/1FAIpQLSe6W6obWzjbVkYhj6Yq9s9T77cwXWL6-Owks4ACR2Mob83txA/viewform"
        />
        <Event
          day="September 28th"
          date={{ day: 28, month: 9, year: 2023 }}
          image={BridgeFinanceLab}
          title="Case Analysis Workshop with Maria Shibaeva"
          start="5:00 PM"
          end="8:00 PM"
          location="IC Building, Finance Lab"
          link="https://docs.google.com/forms/d/e/1FAIpQLSd56nah037PWA7JrnsMe_7SPca8R6IXNe4wBWnqNgaRY95o1g/viewform?usp=sharing"
        />
        <Event
          day="October 3rd"
          date={{ day: 3, month: 10, year: 2023 }}
          image={NetworkingNight}
          title="Power Connect: Career Insights & Recruiter Roundtable"
          start="6:00 PM"
          end="8:00 PM"
          location="IC Atrium"
          link="https://docs.google.com/forms/d/e/1FAIpQLSeRuTVSdltlrmgGoqzwTDBIvP3Q-49nsKHRgfc6t5d2_8H1VQ/viewform?usp=sf_link"
        />
      </div>
    </Layout>
  );
}

export default React.memo(Events);

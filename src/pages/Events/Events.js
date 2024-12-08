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
          day="November 28th"
          date={{ day: 28, month: 11, year: 2024 }}
          image={NetworkingNight}
          title="Inside Consulting"
          start="7:00 PM"
          end="8:00 PM"
          location="IC Atrium"
          link="https://docs.google.com/forms/d/e/1FAIpQLSdf04HM10bZXIfM6rtN4NQ7nb3GDY11k6BorJpGN5IfxUnlqQ/viewform?usp=sf_link"
        />
      <Event
          day="September 27th"
          date={{ day: 27, month: 9, year: 2024 }}
          image={NetworkingNight}
          title="Consulting Orientation"
          start="5:00 PM"
          end="7:00 PM"
          location="IC 230"
          link="https://docs.google.com/forms/d/e/1FAIpQLSdf04HM10bZXIfM6rtN4NQ7nb3GDY11k6BorJpGN5IfxUnlqQ/viewform?usp=sf_link"
        /> 
      </div>
    </Layout>
  );
}

export default React.memo(Events);

import React from "react";
import './HomeEvent.css'

const HomeEvent = () => {
    return (
        <div className="event-container">
        <h2 className="home-event-title">We connect students, faculty and industry connections</h2>
        {/* <p className="home-event-description">Through deep involvement within the university community, MCG organizes a wide range of activities</p> */}
        <div className="event-grid">
          <div className="event">
            <h2><mark className="purple">Professional Workshops</mark></h2>
          </div>
          <div className="event">
            <h2><mark className="purple">Networking Events</mark></h2>
          </div>
          <div className="event">
            <h2><mark className="purple">Case Competitions</mark></h2>
          </div>
          <div className="event">
            <h2><mark className="purple">Case Buddy Mentorship</mark></h2>
          </div>
        </div>
      </div>
    )
}

export default HomeEvent;
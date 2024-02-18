import React from "react";
import './HomeEvent.css'

const HomeEvent = () => {
    return (
        <div className="event-container">
        <h2 className="title">We coordinate between students, faculty and industry connections to organize</h2>
        <div className="event-grid">
          <div className="event">
            <h2><mark className="purple">Workshops</mark></h2>
          </div>
          <div className="event">
            <h2><mark className="purple">Networking Events</mark></h2>
          </div>
          <div className="event">
            <h2><mark className="purple">Case Competitions</mark></h2>
          </div>
          <div className="event">
            <h2><mark className="purple">Consults</mark></h2>
          </div>
        </div>
      </div>
    )
}

export default HomeEvent;
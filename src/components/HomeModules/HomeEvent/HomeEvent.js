import React from "react";
import './HomeEvent.css'

const HomeEvent = () => {
    return (
        <div className="event-container">
        <h1>Founded in 2015, Management Consulting Group is the premier student consulting organization at the University of Toronto Scarborough</h1>
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
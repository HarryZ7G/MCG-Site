import React from "react";
import './HomeStats.css';

const HomeStats = () => {
    return (
        <div className="landing-words">
          <div className="landing-words-column">
            <h1>4</h1>
            <p><mark className="purple">Practice Areas</mark></p>
          </div>
          <div className="landing-words-column">
            <h1>4</h1>
            <p>Annual <mark className="purple">Clients</mark></p>
          </div>
          <div className="landing-words-column">
            <h1>9</h1>
            <p>Years of <mark className="purple">Experience</mark></p>
          </div>
        </div>
    )
}

export default HomeStats;
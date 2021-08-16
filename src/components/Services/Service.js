import React from "react";
import "./Service.css";

// Media
import Finance from "../../media/Finance.svg";
import IT from "../../media/Programmer.svg";
import Marketing from "../../media/Marketing.svg";
import PR from "../../media/Feedback.svg";

// Components
import ServiceElement from "./ServiceElement/ServiceElement";

function Service(props) {
  return (
    <div className="service-blur animate__animated animate__fadeIn animate__delay-05s">
      <div className="service-container">
        <h1 className="purple-font animate__animated animate__fadeIn animate__delay-1s">
          Services
        </h1>
        <div className="service-block animate__animated animate__fadeIn animate__delay-1s">
          <div className="service-row">
            <ServiceElement
              title="Financial Strategy"
              description="Insert description for Finance"
              image={Finance}
            />
            <ServiceElement
              title="IT & Data Analytics"
              description="Provide insight and suggestion for coding and statistics"
              image={IT}
            />
          </div>
          <div className="service-row">
            <ServiceElement
              title="Marketing Strategy"
              description="Insert description for Marketing"
              image={Marketing}
            />
            <ServiceElement
              title="Public Relations"
              description="Insert description for Public Relations"
              image={PR}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Service);

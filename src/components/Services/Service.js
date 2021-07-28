import React from 'react';
import './Service.css';

// Components
import ServiceElement from './ServiceElement/ServiceElement';

function Service(props) {
  return (
    <div className="service-container">
      <text className="home-title purple-font">
        Services
      </text>
      <div className="services-block">
        <ServiceElement
          title="IT & Data Analytics"
          description="Yes we do have IT & Data Analytics service, very impressive I know"
        />
        <ServiceElement
          title="Financial Strategy"
          description="Yes we also have Financial Strategy service, also very impressive right"
        />
        <ServiceElement
          title="Marketing Strategy"
          description="And we also have Marketing Strategy service, impressive huh"
        />
      </div>
    </div>
  )
}

export default React.memo(Service);
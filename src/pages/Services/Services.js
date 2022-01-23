import React from 'react';
import './Services.css';

// Components
import Background from '../../components/Background/Background.js';
import TopBar from '../../components/TopBar/TopBar.js';
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from '../../components/Footer/Footer';

function Services(props) {
  return (
    <div className="root">
      <Background/>
      <TopBar/>
      <PageTitle title="Services" />
      <Footer/>
    </div>
  )
}

export default React.memo(Services);
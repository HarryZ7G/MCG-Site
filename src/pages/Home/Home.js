import React from 'react';
import './Home.css';

// Components
import Background from '../../components/Background/Background.js';
import TopBar from '../../components/TopBar/TopBar.js';
import LandingScreen from '../../components/LandingScreen/LandingScreen.js';
import Service from '../../components/Services/Service';
import Footer from '../../components/Footer/Footer';

function Home(props) {
  return (
    <div className="root">
      <Background/>
      <TopBar/>
      <LandingScreen/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default React.memo(Home);
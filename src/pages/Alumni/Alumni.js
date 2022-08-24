import React, { useEffect } from "react";
import "./Alumni.css";

// Media
import Rohan from "../../media/AlumniHeadshots/Rohan Chadha.jpg";
import Julio from "../../media/AlumniHeadshots/Julio Harza Lopez.jpg";
import Emma from "../../media/AlumniHeadshots/Emma Huang.jpg";
import Ahmed from "../../media/AlumniHeadshots/Ahmedullah Shah.jpg";
import Harry from "../../media/AlumniHeadshots/Harry Geng.jpeg";
import Sooraj from "../../media/AlumniHeadshots/Sooraj Ruparelia.jpg";
import Sumedha from "../../media/AlumniHeadshots/Sumedha Sampath.jpeg";
import Alison from "../../media/AlumniHeadshots/Alison Chan.jpg";
import Revant from "../../media/AlumniHeadshots/Revant Malani.jpg";
import Safwan from "../../media/AlumniHeadshots/Safwan Patel.jpeg";
import Abdul from "../../media/AlumniHeadshots/Abdulrahman Diab.jpg";
import Belka from "../../media/AlumniHeadshots/Belka Jafarova.jpeg";
import Sharon from "../../media/AlumniHeadshots/Sharon Xiao.jpg";
import Khushi from "../../media/AlumniHeadshots/Khushi Mansukhani.jpg";
import Melody from "../../media/AlumniHeadshots/Melody Chan.jpg";
import Ahnaf from "../../media/AlumniHeadshots/Ahnaf Rahman.jpeg";
import Stephanie from "../../media/AlumniHeadshots/Stephanie Wong.jpg";

import BCG from "../../media/Alumni Logos/BCG.png";
import Caseware from "../../media/Alumni Logos/Caseware.png";
import Citi from "../../media/Alumni Logos/Citi.png";
import IBM from "../../media/Alumni Logos/IBM.png";
import KPMG from "../../media/Alumni Logos/KPMG.png";
import Microsoft from "../../media/Alumni Logos/Microsoft.png";
import RBC from "../../media/Alumni Logos/RBC.png";
import Scotiabank from "../../media/Alumni Logos/Scotiabank.png";
import Snap from "../../media/Alumni Logos/Snap.png";
import TD from "../../media/Alumni Logos/TD.png";

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import LegacyMember from "../../components/Member/LegacyMember/LegacyMember.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer";
// import MemberPopup from "../../components/Member/MemberPopup/MemberPopup";

const alumni = [
  `MCG members build on the skills and experience they have gained to join `,
  <mark className="purple">top companies and institutions</mark>,
  ` across all industries after graduation.`,
];

function Alumni(props) {
  const executives = [
    <LegacyMember
      key={0}
      name="Rohan Chadha"
      title="Managing Partner"
      picture={Rohan}
      link="https://www.linkedin.com/in/rohanchadhaa/"
    />,
    <LegacyMember
      key={1}
      name="Julio Garza Lopez"
      title="Managing Partner"
      picture={Julio}
      link="https://www.linkedin.com/in/juliogarzal/"
    />,
    <LegacyMember
      key={2}
      name="Ahmedullah Shah"
      title="Marketing Strategy Senior Partner"
      picture={Ahmed}
      link="https://www.linkedin.com/in/ahmedullah-shah-966650152/"
    />,
    <LegacyMember
      key={3}
      name="Emma Huang"
      title="Marketing Strategy Senior Partner"
      picture={Emma}
      link="https://www.linkedin.com/in/emmahuang6"
    />,
    <LegacyMember
      key={4}
      name="Harry Geng"
      title="IT Senior Partner"
      picture={Harry}
      link="https://www.linkedin.com/in/harry-geng"
    />,
    <LegacyMember
      key={5}
      name="Sooraj Ruparelia"
      title="Finance Strategy Senior Partner"
      picture={Sooraj}
      link="https://www.linkedin.com/in/soorajruparelia/"
    />,
    <LegacyMember
      key={6}
      name="Sumedha Sampath"
      title="Vice President Public Relations"
      picture={Sumedha}
      link="https://www.linkedin.com/in/sumedhasampath"
    />,
  ];

  const consultants = [
    <LegacyMember
      key={0}
      name="Alison Chan"
      title="Consultant, Finance Strategy"
      picture={Alison}
      link="https://www.linkedin.com/in/alisonchann"
    />,
    <LegacyMember
      key={1}
      name="Revant Malani"
      title="Consultant, Finance Strategy"
      picture={Revant}
      link="https://ca.linkedin.com/in/revantmalani"
    />,
    <LegacyMember
      key={2}
      name="Safwan Patel"
      title="Consultant, Finance Strategy"
      picture={Safwan}
      link="https://www.linkedin.com/in/safwan-patel-b389291b5/"
    />,
    <LegacyMember
      key={3}
      name="Adulrahman Diab "
      title="Consultant, IT & Data Analytics"
      picture={Abdul}
      link="https://www.linkedin.com/in/ardiab/"
    />,
    <LegacyMember
      key={4}
      name="Belka Jafarova"
      title="Consultant, IT & Data Analytics"
      picture={Belka}
      link="https://www.linkedin.com/in/beyim-jafarova/"
    />,
    <LegacyMember
      key={5}
      name="Sharon Xiao"
      title="Consultant, IT & Data Analytics"
      picture={Sharon}
      link="https://www.linkedin.com/in/sharxiao/"
    />,
    <LegacyMember
      key={6}
      name="Khushi Mansukhani"
      title="Consultant, Marketing Strategy"
      picture={Khushi}
      link="https://www.linkedin.com/in/khushimansukhani"
    />,
  ];

  const operations = [
    <LegacyMember
      key={0}
      name="Melody Chan"
      title="Marketing Specialist"
      picture={Melody}
      link="https://www.linkedin.com/in/melody-chan-bb1b5b198/"
    />,
    <LegacyMember
      key={1}
      name="Ahnaf Rahman"
      title="Operations Specialist"
      picture={Ahnaf}
      link="https://www.linkedin.com/in/ahnaf-r/"
    />,
    <LegacyMember
      key={2}
      name="Stephanie Wong "
      title="Operations Specialist"
      picture={Stephanie}
      link="https://www.linkedin.com/in/sstephwong/"
    />,
  ];

  return (
    <div className="root">
      <Background />
      <TopBar />
      <PageTitle title="Alumni" intro={alumni} />
      <div className="members-wrapper animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="purple-font title">Executives</h1>
        <div className="members-grid">{executives}</div>

        <h1 className="purple-font title">Consultants</h1>
        <div className="members-grid">{consultants}</div>

        <h1 className="purple-font title">Operations</h1>
        <div className="members-grid">{operations}</div>

        <h1 className="purple-font alumni-achievement">Alumni Achievement</h1>
        <div className="alumni-wrapper">
          <div className="alumni-row">
            <div className="alumni-subrow">
              <img src={BCG} alt="BCG" />
              <img src={Caseware} alt="Caseware" />
            </div>
            <div className="alumni-subrow">
              <img src={Citi} alt="Citi" />
              <img src={IBM} alt="IBM" />
              <img src={KPMG} alt="KPMG" />
            </div>
          </div>
          <div className="alumni-row">
            <div className="alumni-subrow">
              <img src={Microsoft} alt="Microsoft" />
              <img src={RBC} alt="RBC" />
            </div>
            <div className="alumni-subrow">
              <img src={Scotiabank} alt="Scotiabank" />
              <img src={Snap} alt="Snap" />
              <img src={TD} alt="TD" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Alumni);

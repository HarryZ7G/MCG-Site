import React from "react";
import "./Team.css";

// Media
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
import Member from "../../components/Member/Member.js";
import LegacyMember from "../../components/Member/LegacyMember/LegacyMember.js";
import TeamData from "./TeamData";
import AlumniData from "./AlumniData";
import Layout from "../../components/Layout/Layout";

function Alumni() {
  const members = TeamData.map((member, index) => <Member key={`member${index}`} {...member} />);
  const alumni = AlumniData.map((alumni, index) => <LegacyMember key={`alumni${index}`} {...alumni} />)

  return (
    <Layout
      headerTitle='Our Team'
      description="The student executive team behind our organization."
      title="Our Team"
      disableIndexing
      useBackground>
      <h1 className={`purple-font title`}>Members</h1>
      <div className="members-grid">{members}</div>
      <h1 className="purple-font title">Alumni</h1>
      <div className="members-grid">{alumni}</div>

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
    </Layout>
  );
}

export default React.memo(Alumni);

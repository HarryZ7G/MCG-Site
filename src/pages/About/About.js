import React, { useEffect } from "react";
import "./About.css";

// Media
import Anushka from "../../media/Headshots/Anushka.jpg";
import Bobby from "../../media/Headshots/Bobby.jpg";
import Camilly from "../../media/Headshots/Camilly.jpg";
import Chloe from "../../media/Headshots/Chloe.jpg";
import Harry from "../../media/Headshots/Harry.jpeg";
import Jaspreet from "../../media/Headshots/Jaspreet.jpg";
import Justin from "../../media/Headshots/Justin.jpg";
import Maiesha from "../../media/Headshots/Maiesha.jpg";
import Rachel from "../../media/Headshots/Rachel.jpg";
import Safwan from "../../media/Headshots/Safwan.png";
import Sooraj from "../../media/Headshots/Sooraj.jpg";
import Tom from "../../media/Headshots/Tom.jpg";
import Vraj from "../../media/Headshots/Vraj.jpg";

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import Member from "../../components/Member/Member.js";
import MemberEmpty from "../../components/Member/MemberEmpty/MemberEmpty.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer";
// import MemberPopup from "../../components/Member/MemberPopup/MemberPopup";

const about = [
  `Since its inception in 2015, MCG has worked with a variety of businesses `,
  <mark className="purple">from start-ups to large legal firms</mark>,
  ` in order to create relevant short-term and long-term marketing, data, and financial strategy-based solutions.`,
];

function About(props) {
  const [exec, setExec] = React.useState(null);

  const executives = [
    <Member
      key={0}
      name="Safwan Patel"
      title="Managing Partner"
      picture={Safwan}
      link="https://www.linkedin.com/in/safwan-patel-b389291b5/"
    />,
    <Member
      key={1}
      name="Sooraj Ruparelia"
      title="Managing Partner"
      picture={Sooraj}
      link="https://www.linkedin.com/in/soorajruparelia/"
    />,
    <Member
      key={2}
      name="Bobby Huang"
      title="Senior Partner, Marketing Strategy"
      picture={Bobby}
      link="https://www.linkedin.com/in/qingtian-bobby-huang/"
    />,
    <Member
      key={3}
      name="Justin Ng"
      title="Consultant, Marketing Strategy"
      picture={Justin}
      link="https://www.linkedin.com/in/ng-chun-yin-justin/"
    />,
    <Member
      key={4}
      name="Tom Nguyen"
      title="Consultant, Marketing Strategy "
      picture={Tom}
      link="https://www.linkedin.com/in/tomnguyen00/"
    />,
    <Member
      key={5}
      name="Rachel Wang"
      title="Senior Partner, Financial Strategy"
      picture={Rachel}
      link="https://www.linkedin.com/in/xinyiw2024/"
    />,
    <Member
      key={6}
      name="Camilly Fuentes"
      title="Consultant , Financial Strategy"
      picture={Camilly}
      link="https://www.linkedin.com/in/camillyfuentes/"
    />,
    <Member
      key={7}
      name="Jaspreet Johal"
      title="Consultant, Financial Strategy "
      picture={Jaspreet}
      link="https://www.linkedin.com/in/jaspreet-johal-978a7a143/"
    />,
    <Member
      key={8}
      name="Vraj Thakkar"
      title="Analyst, Financial Strategy"
      picture={Vraj}
      link="https://www.linkedin.com/in/vraj-thakkar/"
    />,
    <Member
      key={9}
      name="Maiesha Zahir"
      title="VP of Public Relations"
      picture={Maiesha}
      link="https://www.linkedin.com/in/maieshazahir/"
    />,
    <Member
      key={10}
      name="Anushka Kaliyar"
      title="Director, Marketing"
      picture={Anushka}
      link="https://www.linkedin.com/in/anushka-kaliyar-377427234/"
    />,
    <Member
      key={11}
      name="Chloe Tai"
      title="Director, Operations"
      picture={Chloe}
      link="https://www.linkedin.com/in/fumin-chloe-tai"
    />,
    <Member
      key={12}
      name="Harry Geng"
      title="Director, IT"
      picture={Harry}
      link="https://www.linkedin.com/in/harry-geng/"
    />,
  ];

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const resizeCalc = (number, members, setmembers) => {
    let display = [];
    let row = [];
    for (let i = number; i < members.length + number; i += number) {
      if (i <= members.length) {
        row = members.slice(i - number, i);
      } else {
        row = members.slice(i - number, members.length);
        let remain = i - members.length;
        for (let j = 0; j < remain; j++) {
          row.push(<MemberEmpty key={j} />);
        }
      }
      display.push(<div className="member-cluster" key={i}>{row}</div>);
    }
    setmembers(display);
  };

  let currentWidth = 0;

  const handleResize = () => {
    if (window.innerWidth > 1700) {
      if (currentWidth !== 5) {
        resizeCalc(5, executives, setExec);
        currentWidth = 5;
      }
    } else if (window.innerWidth > 970) {
      if (currentWidth !== 4) {
        resizeCalc(4, executives, setExec);
        currentWidth = 4;
      }
    } else if (window.innerWidth > 700) {
      if (currentWidth !== 3) {
        resizeCalc(3, executives, setExec);
        currentWidth = 3;
      }
    } else if (window.innerWidth > 480) {
      if (currentWidth !== 2) {
        resizeCalc(2, executives, setExec);
        currentWidth = 2;
      }
    } else {
      if (currentWidth !== 1) {
        setExec(executives);
        currentWidth = 1;
      }
    }
  };

  return (
    <div className="root">
      <Background />
      <TopBar />
      <PageTitle title="About" intro={about} />
      <div className="members-wrapper animate__animated animate__fadeIn animate__delay-1s">
        <h1 className={`purple-font title`}>Members</h1>
        {exec}
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(About);

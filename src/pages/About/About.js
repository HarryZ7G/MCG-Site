import React, { useEffect } from "react";
import "./About.css";

// Media
import Rohan from "../../media/Headshots/Rohan Chadha.jpg";
import Julio from "../../media/Headshots/Julio Harza Lopez.jpg";
import Emma from "../../media/Headshots/Emma Huang.jpg";
import Ahmed from "../../media/Headshots/Ahmedullah Shah.jpg";
import Harry from "../../media/Headshots/Harry Geng.jpeg";
import Sooraj from "../../media/Headshots/Sooraj Ruparelia.jpg";
import Sumedha from "../../media/Headshots/Sumedha Sampath.jpeg";
import Alison from "../../media/Headshots/Alison Chan.jpg";
import Revant from "../../media/Headshots/Revant Malani.jpg";
import Safwan from "../../media/Headshots/Safwan Patel.jpeg";
import Abdul from "../../media/Headshots/Abdulrahman Diab.jpg";
import Belka from "../../media/Headshots/Belka Jafarova.jpeg";
import Sharon from "../../media/Headshots/Sharon Xiao.jpg";
import Khushi from "../../media/Headshots/Khushi Mansukhani.jpg";
import Melody from "../../media/Headshots/Melody Chan.jpg";
import Ahnaf from "../../media/Headshots/Ahnaf Rahman.jpeg";
import Stephanie from "../../media/Headshots/Stephanie Wong.jpg";

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
  // const handleOpen = (name) => {
  //   setName(name);
  //   setPopup("show");
  //   if (intros[name]) setIntro(intros[name]);
  //   else setIntro({ Bio: "None", Experiences: "None" });
  // };

  // const handleClose = () => {
  //   setPopup("hidden");
  // };

  const [exec, setExec] = React.useState(null);
  const [consultant, setConsultant] = React.useState(null);
  const [operation, setOperation] = React.useState(null);
  const [width, setWidth] = React.useState(null);
  // const [popup, setPopup] = React.useState("hidden");
  // const [name, setName] = React.useState("hidden");
  // const [intro, setIntro] = React.useState({
  //   bio: "None",
  //   experiences: "None",
  //   title: "None",
  // });

  const executives = [
    <Member
      name="Rohan Chadha"
      title="Managing Partner"
      picture={Rohan}
      link="https://www.linkedin.com/in/rohanchadhaa/"
    />,
    <Member
      name="Julio Garza Lopez"
      title="Managing Partner"
      picture={Julio}
      link="https://www.linkedin.com/in/juliogarzal/"
    />,
    <Member
      name="Ahmedullah Shah"
      title="Marketing Strategy Senior Partner"
      picture={Ahmed}
      link="https://www.linkedin.com/in/ahmedullah-shah-966650152/"
    />,
    <Member
      name="Emma Huang"
      title="Marketing Strategy Senior Partner"
      picture={Emma}
      link="https://www.linkedin.com/in/emmahuang6"
    />,
    <Member
      name="Harry Geng"
      title="Information Technology Senior Partner"
      picture={Harry}
      link="https://www.linkedin.com/in/harry-geng"
    />,
    <Member
      name="Sooraj Ruparelia"
      title="Finance Strategy Senior Partner"
      picture={Sooraj}
      link="https://www.linkedin.com/in/soorajruparelia/"
    />,
    <Member
      name="Sumedha Sampath"
      title="Vice President Public Relations"
      picture={Sumedha}
      link="https://www.linkedin.com/in/sumedhasampath"
    />,
  ];

  const consultants = [
    <Member
      name="Alison Chan"
      title="Consultant, Finance Strategy"
      picture={Alison}
      link="https://www.linkedin.com/in/alisonchann"
    />,
    <Member
      name="Revant Malani"
      title="Consultant, Finance Strategy"
      picture={Revant}
      link="https://ca.linkedin.com/in/revantmalani"
    />,
    <Member
      name="Safwan Patel"
      title="Consultant, Finance Strategy"
      picture={Safwan}
      link="https://www.linkedin.com/in/safwan-patel-b389291b5/"
    />,
    <Member
      name="Adulrahman Diab "
      title="Consultant, IT & Data Analytics"
      picture={Abdul}
      link="https://www.linkedin.com/in/ardiab/"
    />,
    <Member
      name="Belka Jafarova"
      title="Consultant, IT & Data Analytics"
      picture={Belka}
      link="https://www.linkedin.com/in/beyim-jafarova/"
    />,
    <Member
      name="Sharon Xiao"
      title="Consultant, IT & Data Analytics"
      picture={Sharon}
      link="https://www.linkedin.com/in/sharxiao/"
    />,
    <Member
      name="Khushi Mansukhani"
      title="Consultant, Marketing Strategy"
      picture={Khushi}
      link="https://www.linkedin.com/in/khushimansukhani"
    />,
  ];

  const operations = [
    <Member
      name="Melody Chan"
      title="Marketing Specialist, Public Relations"
      picture={Melody}
      link="https://www.linkedin.com/in/melody-chan-bb1b5b198/"
    />,
    <Member
      name="Ahnaf Rahman"
      title="Operations Specialist, Public Relations"
      picture={Ahnaf}
      link="https://www.linkedin.com/in/ahnaf-r/"
    />,
    <Member
      name="Stephanie Wong "
      title="Operations Specialist, Public Relations"
      picture={Stephanie}
      link="https://www.linkedin.com/in/sstephwong/"
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
          row.push(<MemberEmpty />);
        }
      }
      switch (number) {
        case 4:
          display.push(<div className="member-cluster-four">{row}</div>);
          break;
        case 3:
          display.push(<div className="member-cluster-three">{row}</div>);
          break;
        case 2:
          display.push(<div className="member-cluster-two">{row}</div>);
          break;
      }
    }
    setmembers(display);
  };

  const handleResize = () => {
    if (window.innerWidth > 1500) {
      setWidth("four");
      resizeCalc(4, executives, setExec);
      resizeCalc(4, consultants, setConsultant);
      resizeCalc(4, operations, setOperation);
    } else if (window.innerWidth > 1100) {
      setWidth("three");
      resizeCalc(3, executives, setExec);
      resizeCalc(3, consultants, setConsultant);
      resizeCalc(3, operations, setOperation);
    } else if (window.innerWidth > 700) {
      setWidth("two");
      resizeCalc(2, executives, setExec);
      resizeCalc(2, consultants, setConsultant);
      resizeCalc(2, operations, setOperation);
    } else {
      setWidth("one");
      setExec(executives);
      setConsultant(consultants);
      setOperation(operations);
    }
  };

  return (
    <div className="root">
      <Background />
      <TopBar />
      <PageTitle title="About" intro={about} />
      {/* <MemberPopup show={popup} close={handleClose} name={name} intro={intro} /> */}
      <div className="members-wrapper animate__animated animate__fadeIn animate__delay-1s">
        <h1 className={`purple-font ${width}`}>Executives</h1>
        {exec}
        <h1 className={`purple-font ${width}`}>Consultants</h1>
        {consultant}
        <h1 className={`purple-font ${width}`}>Operations</h1>
        {operation}
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(About);

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

// Components
import Background from "../../components/Background/Background.js";
import TopBar from "../../components/TopBar/TopBar.js";
import Member from "../../components/Member/Member.js";
import MemberEmpty from "../../components/Member/MemberEmpty/MemberEmpty.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer";
// import MemberPopup from "../../components/Member/MemberPopup/MemberPopup";

function Alumni(props) {
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
      title="IT Senior Partner"
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
      title="Marketing Specialist"
      picture={Melody}
      link="https://www.linkedin.com/in/melody-chan-bb1b5b198/"
    />,
    <Member
      name="Ahnaf Rahman"
      title="Operations Specialist"
      picture={Ahnaf}
      link="https://www.linkedin.com/in/ahnaf-r/"
    />,
    <Member
      name="Stephanie Wong "
      title="Operations Specialist"
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
      display.push(<div className="member-cluster">{row}</div>);
    }
    setmembers(display);
  };

  const handleResize = () => {
    if (window.innerWidth > 1700) {
      resizeCalc(5, executives, setExec);
      resizeCalc(5, consultants, setConsultant);
      resizeCalc(5, operations, setOperation);
    } else if (window.innerWidth > 970) {
      resizeCalc(4, executives, setExec);
      resizeCalc(4, consultants, setConsultant);
      resizeCalc(4, operations, setOperation);
    } else if (window.innerWidth > 700) {
      resizeCalc(3, executives, setExec);
      resizeCalc(3, consultants, setConsultant);
      resizeCalc(3, operations, setOperation);
    } else if (window.innerWidth > 480) {
      resizeCalc(2, executives, setExec);
      resizeCalc(2, consultants, setConsultant);
      resizeCalc(2, operations, setOperation);
    } else {
      setExec(executives);
      setConsultant(consultants);
      setOperation(operations);
    }
  };

  return (
    <div className="root">
      <Background />
      <TopBar />
      <PageTitle title="Alumni" />
      <div className="members-wrapper animate__animated animate__fadeIn animate__delay-1s">
        <h1 className={`purple-font title`}>Executives</h1>
        {exec}
        <h1 className={`purple-font title`}>Consultants</h1>
        {consultant}
        <h1 className={`purple-font title`}>Operations</h1>
        {operation}
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Alumni);

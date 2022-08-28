import React, { useEffect } from "react";
import "./Team.css";

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

import Rohan from "../../media/AlumniHeadshots/Rohan Chadha.jpg";
import Julio from "../../media/AlumniHeadshots/Julio Harza Lopez.jpg";
import Emma from "../../media/AlumniHeadshots/Emma Huang.jpg";
import Ahmed from "../../media/AlumniHeadshots/Ahmedullah Shah.jpg";
import Sumedha from "../../media/AlumniHeadshots/Sumedha Sampath.jpeg";
import Alison from "../../media/AlumniHeadshots/Alison Chan.jpg";
import Revant from "../../media/AlumniHeadshots/Revant Malani.jpg";
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
import Member from "../../components/Member/Member.js";
import LegacyMember from "../../components/Member/LegacyMember/LegacyMember.js";
import PageTitle from "../../components/PageTitle/PageTitle.js";
import Footer from "../../components/Footer/Footer";
// import MemberPopup from "../../components/Member/MemberPopup/MemberPopup";

const intro = [
  `MCG members build on the skills and experience they have gained to join `,
  <mark className="purple">top companies and institutions</mark>,
  ` across all industries after graduation.`,
];

function Alumni(props) {
  const members = [
    <Member
      key={0}
      first="Safwan"
      last="Patel"
      title="Managing Partner"
      picture={Safwan}
      link="https://www.linkedin.com/in/safwan-patel-b389291b5/"
      intro="Safwan is a fourth-year BBA student specializing in Management and Accounting. He has experience as a Business Appeals Intern at the Ministry of Ontario and as an Enterprise Finance Intern at TD Bank.. Safwan joined MCG to make a meaningful impact on campus through our consulting practice and active school presense. He is also passionate about accounting/finance, and enjoys providing advice & expertise to clients to help improve their organizations. Safwan is also a big sports fan; Go Leafs/Raptors!"
    />,
    <Member
      key={1}
      first="Sooraj"
      last="Ruparelia"
      title="Managing Partner"
      picture={Sooraj}
      link="https://www.linkedin.com/in/soorajruparelia/"
      intro="Sooraj is a 4th year student in the BBA Management program specializing in Finance. He has been involved with multiple management clubs and was the Senior Partner of Finance at MCG last year. Sooraj graduates at the end of 2022 when he will be building on his internship experiences and continuing a career in the buy-side. He joined MCG to surround himself with an ambitious group and work on exciting engagements. Sooraj enjoys F1 races and plays football every week. "
    />,
    <Member
      key={2}
      first="Bobby"
      last="Huang"
      title="Senior Partner, Marketing Strategy"
      picture={Bobby}
      link="https://www.linkedin.com/in/qingtian-bobby-huang/"
      intro="Bobby is a second-year BBA student with a specialization in Management International Business. He is now a Marketing/Business Development Intern at Banking Books Analytics and hopes to pursue a consultancy career. Bobby hopes to create MCG the consulting club by using his experience and efforts to deliver more consulting-related knowledge to the entire management student body. His desire to assist and learn from other enterprises enables him to work with other organizations seeking assistance in their operations. He is also interested in technology, sustainability, and professional development, and he enjoys golf."
    />,
    <Member
      key={3}
      first="Justin"
      last="Ng"
      title="Consultant, Marketing Strategy"
      picture={Justin}
      link="https://www.linkedin.com/in/ng-chun-yin-justin/"
      intro="Justin is a third-year BA student double majoring in Economics and Political Science. He has experience as a Compliance Intern at Manulife Investment Management and as a Legislator Intern at a political party in Hong Kong assisting in marketing strategies. Intereseted in pursuing a career in consulting, he joined MCG to gain professional consulting experience while providing useful assistance to the team, as well as helping the club to make a positive impact on the management student community. He is passionate about sustainability, learning new skills, and playing badminton."
    />,
    <Member
      key={4}
      first="Tom"
      last="Nguyen"
      title="Consultant, Marketing Strategy "
      picture={Tom}
      link="https://www.linkedin.com/in/tomnguyen00/"
      intro="Tom is a fourth-year BBA student specializing in Management and Marketing. He's a current Institutional Marketing intern at Manulife Investment Management and has past experiences in project management, marketing and entrepreneurship. By joining MCG, Tom hopes to expand his consulting skills and help our future clients thrive while making a positive impact across the UTSC community. He's also interested in sports, fitness, education, technology and entrepreneurship.  "
    />,
    <Member
      key={5}
      first="Rachel"
      last="Wang"
      title="Senior Partner, Financial Strategy"
      picture={Rachel}
      link="https://www.linkedin.com/in/xinyiw2024/"
      intro="Rachel is a third-year BBA student specializing in Management and Finance. She had professional experience in two consulting firms, McKinsey and Roland Berger. She is passionate about case competitions and won several individual and team prizes.  Rachel joined MCG to further hone transferrable skills and gain consulting experience and will engage in helping the club make an imapact and difference on campus and in the community. She is also interested in finance, marketing, career planning and enjoys providing advice & expertise to clients to help improve their organizations."
    />,
    <Member
      key={6}
      first="Camilly"
      last="Fuentes"
      title="Consultant , Financial Strategy"
      picture={Camilly}
      link="https://www.linkedin.com/in/camillyfuentes/"
      intro="Camilly is a second-year BBA and BSc student specializing in Statistics and Quantitative Finance. She has experience as a Research and Development Assistant at CompraEcuador.com, where she developed an effective financial and sales strategy for an appliance company during a national strike and pandemic. Camilly is currently working at the Department of Management at University of Toronto Scarborough as a Marketing and Community Engagement Associate, where she develops logistics and finance plans for Management events at university. Camilly joined MCG to gain professional consulting experience that will be transferred to her future projects. She believes that financial strategy is vital to the success of any organization. Camilly is also passionate about volleyball, learning new languages, and playing the piano."
    />,
    <Member
      key={7}
      first="Jaspreet"
      last="Johal"
      title="Consultant, Financial Strategy "
      picture={Jaspreet}
      link="https://www.linkedin.com/in/jaspreet-johal-978a7a143/"
      intro="Jaspreet is a fourth year BBA student specializing in Managment and Finance. He has experience in the Construction Industry where he worked as a Assistant Project Coordinator and an Automotive background from his time as a Finance Intern for the Ford Motor Company. Jaspreet joined MCG as a way to gain and build the necessary skills required to be successful  in the consulting industry. What piqued his interest in consulting was the fact that it's the only profession that allows an individual to work across various businesses and provide a unique and wide array of solutions. Jaspreet is also a huge sports fan, particularly football and basketball he is also avid movie watcher."
    />,
    <Member
      key={8}
      first="Vraj"
      last="Thakkar"
      title="Analyst, Financial Strategy"
      picture={Vraj}
      link="https://www.linkedin.com/in/vraj-thakkar/"
      intro="Vraj is a second year BBA student planning to specialize in either Accounting or Finance. He has had experience in Financial Strategy before as he was part of MCG last year. Vraj enjoyed being part in MCG and has a keen interest in consulting and is looking forward to working with MCG again by gaining important skills and experience. Vraj really enjoys watching shows and movies, he loves watching The Office and Suits and is also a big sports fan."
    />,
    <Member
      key={9}
      first="Maiesha"
      last="Zahir"
      title="VP of Public Relations"
      picture={Maiesha}
      link="https://www.linkedin.com/in/maieshazahir/"
    />,
    <Member
      key={10}
      first="Anushka"
      last="Kaliyar"
      title="Director, Marketing"
      picture={Anushka}
      link="https://www.linkedin.com/in/anushka-kaliyar-377427234/"
      intro="Anushka is a second year Social Science and Humanities student. She has experience as a digital marketing intern a XIRCLS, world’s first decentralized collaborative marketing network, and a marketing manager at MyNutriFeast, a start-up company that produces organic health products. An opportunity to work in a consulting club in marketing interested her. She aims to pursue a career in the marketing industry and working in MCG will allow her to explore a new side of marketing technique to be used in the consulting industry. She joined MCG to gain new skills that may help her in the future and to make an impact on campus after making this club reachable to everyone. Anushka is also very passionate about writing poetry and painting."
    />,
    <Member
      key={11}
      first="Chloe"
      last="Tai"
      title="Director, Operations"
      picture={Chloe}
      link="https://www.linkedin.com/in/fumin-chloe-tai"
      intro="Chloe is a second-year BBA Management student specialising in Marketing. She has experience organizing and coordinating large scale events and hopes to learn more about the consulting industry. Chloe joined MCG in hopes to bridge the gap between students and the various business and education opportunities this club can provide. She is also passionate about bringing the school community closer together. Chloe also shows a great interest in developing strategies, current social issues and enjoys playing sports."
    />,
    <Member
      key={12}
      first="Harry"
      last="Geng"
      title="Director, IT"
      picture={Harry}
      link="https://www.linkedin.com/in/harry-geng/"
      intro="Harry is a fourth year Computer Science student specializing in Software Engineering. He previously worked as an backend developer intern at IBM and Senior Partner of IT & Data Analytics at MCG. He has many experiences in frontend and backend development, the current website is designed and developed by the IT & Data Analytics team from last year."
    />,
  ];

  const alumni = [
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
    <LegacyMember
      key={7}
      name="Alison Chan"
      title="Consultant, Finance Strategy"
      picture={Alison}
      link="https://www.linkedin.com/in/alisonchann"
    />,
    <LegacyMember
      key={8}
      name="Revant Malani"
      title="Consultant, Finance Strategy"
      picture={Revant}
      link="https://ca.linkedin.com/in/revantmalani"
    />,
    <LegacyMember
      key={9}
      name="Safwan Patel"
      title="Consultant, Finance Strategy"
      picture={Safwan}
      link="https://www.linkedin.com/in/safwan-patel-b389291b5/"
    />,
    <LegacyMember
      key={10}
      name="Adulrahman Diab "
      title="Consultant, IT & Data Analytics"
      picture={Abdul}
      link="https://www.linkedin.com/in/ardiab/"
    />,
    <LegacyMember
      key={11}
      name="Belka Jafarova"
      title="Consultant, IT & Data Analytics"
      picture={Belka}
      link="https://www.linkedin.com/in/beyim-jafarova/"
    />,
    <LegacyMember
      key={12}
      name="Sharon Xiao"
      title="Consultant, IT & Data Analytics"
      picture={Sharon}
      link="https://www.linkedin.com/in/sharxiao/"
    />,
    <LegacyMember
      key={13}
      name="Khushi Mansukhani"
      title="Consultant, Marketing Strategy"
      picture={Khushi}
      link="https://www.linkedin.com/in/khushimansukhani"
    />,
    <LegacyMember
      key={14}
      name="Melody Chan"
      title="Marketing Specialist"
      picture={Melody}
      link="https://www.linkedin.com/in/melody-chan-bb1b5b198/"
    />,
    <LegacyMember
      key={14}
      name="Ahnaf Rahman"
      title="Operations Specialist"
      picture={Ahnaf}
      link="https://www.linkedin.com/in/ahnaf-r/"
    />,
    <LegacyMember
      key={15}
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
      <PageTitle title="Our Teamt" intro={intro} />
      <div className="members-wrapper animate__animated animate__fadeIn animate__delay-1s">
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
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(Alumni);

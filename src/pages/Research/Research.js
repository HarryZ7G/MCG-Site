import React from "react";
import "./Research.module.css";

// Components

import ResearchPreview from "../../components/ResearchPreview/ResearchPreview";
import styles from './Research.module.css'
import ResearchIntroIcon from "../../components/ResearchPreview/ResearchIntroIcon/ResearchIntroIcon";
import Layout from "../../components/Layout/Layout";
import CenteredGrid from "../../components/CenteredGrid/CenteredGrid";
import Background from "../../components/Background/Background";

function Research(props) {

  const introIcons = [
    {
      title: "Company Case Studies",
      description: "Read how leading companies in their industries like Ryanair, Duolingo, and Nike are responding to new consumer needs and market conditions."
    },
    {
      title: "Industry Research",
      description: "Learn about how different industries, companies and products have evolved over time with statistics from industry leaders like Mckinsey and Company and Salesforce."
    },
    {
      title: "Emerging Technologies",
      description: "Gain exposure to new and emerging technologies in software automation, AI, VR, and blockchain that are aiming to improve productivity, revolutionize industries and create new markets."
    },
    {
      title: "Marketing Plans",
      description: "Better understand your addressable market and current consumer demographics by using research to inform your product design and marketing strategy."
    },
  ]

  return (
    <Layout title='Research' useBackground>
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <h2 className="purple-font">What is Research at MCG?</h2>
          <h3>
            Research articles at MCG are written by undergraduates to inform clients and fellow students about current and future market trends in the industry of interest. We strive to deliver professional and comprehensive reports so that readers can take actionable steps towards implementing new strategies and technologies.
          </h3>
        </div>
        <CenteredGrid Component={ResearchIntroIcon} props={introIcons} gridKey='research' />
      </div>
      <ResearchPreview />
    </Layout>
  );
}

export default React.memo(Research);

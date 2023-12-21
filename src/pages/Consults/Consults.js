import { memo } from "react";
import CenteredGrid from "../../components/CenteredGrid/CenteredGrid";
import Layout from "../../components/Layout/Layout";
import NumberedLayout from "../../components/NumberedLayout/NumberedLayout";
import ResearchIntroIcon from "../../components/ResearchPreview/ResearchIntroIcon/ResearchIntroIcon";
import styles from './Consults.module.css'
import { experience, serviceCategories, steps } from "./ConsultsData"
import ConsultCard from "../../components/ConsultCard/ConsultCard";

function Consults() {
    const workflowItem = ({title, description}) => <div style={{flexDirection: 'column', display: 'flex'}}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

    return (
        <Layout headerTitle='Consults' title='Consults' description='MCG provides pro-bono consulting services across four service categories. Hear from past clients and learn about our workflow.' useBackground>
            <div className={styles.intro}>
                <h2 className={`purple-font ${styles.introTitle}`}>Our Services</h2>
                <p>
                    The Management Consulting Group provides pro-bono consulting services to clients to help across four service categories.
                </p>
                <div>
                <CenteredGrid Component={ResearchIntroIcon} props={serviceCategories} gridKey='consults' />
                </div>
            </div>
            <h2 className={styles.clientHeader}>Hear from our satisfied clients!</h2>
            <div className={styles.clients}>
            {experience.map(exp => <ConsultCard {...exp} />)}
            </div>
            <div className={styles.workflow}>
                <h2 className={`purple-font ${styles.workflowTitle}`}>Our Project Workflow</h2>
                <NumberedLayout Component={workflowItem} props={steps} />
            </div>
        </Layout>
    );
}

export default memo(Consults);
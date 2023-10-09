import { memo } from "react";
import CenteredGrid from "../../components/CenteredGrid/CenteredGrid";
import Layout from "../../components/Layout/Layout";
import NumberedLayout from "../../components/NumberedLayout/NumberedLayout";
import ResearchIntroIcon from "../../components/ResearchPreview/ResearchIntroIcon/ResearchIntroIcon";
import styles from './Consults.module.css'

function Consults(props) {

    const serviceCategories = [
        {
            title: "Financial Strategy",
            description: 'Analyze financial infrastructure of clients to optimize financial efficiency.'
        },
        {
            title: 'IT & Data Analytics',
            description: 'Provide insight and suggestion for coding and statistics.'
        },
        {
            title: 'Marketing Strategy',
            description: 'Provide marketing strategy solutions and identify industry trends.'
        },
        {
            title: 'Strategic Growth',
            description: 'Formulate plans to achieve high and sustainable growth.'
        }
    ]

    const introIcons = [
        {
            title: "Pricing Analysis",
            description: ""
        },
        {
            title: "Data Visualization",
            description: ""
        },
        {
            title: "Competitive Analysis",
            description: ""
        },
        {
            title: "Cost Optimization",
            description: ""
        },
        {
            title: "Marketing Plans",
            description: ""
        },
        {
            title: "Financial Forecasts",
            description: ""
        },
    ]

    const steps = [
        {
            title: "Contracting",
            description: "Contact MCG and arrange to work with us during the Fall (Sep - Dec) or Winter (Jan - Apr) semesters."
        },
        {
            title: "First Collaborative Team Meeting",
            description: "Meet with MCG representatives to discuss expectations and share any appropriate materials."
        },
        {
            title: "Phase A",
            description: "Our consultants will conduct research and studies based on the expectations and deliverables determined."
        },
        {
            title: "Mid-point Check-in",
            description: "Touch base with our consultants, who will provide a presentation and an opportunity to give feedback."
        },
        {
            title: "Phase B",
            description: "Our consultants will respond to your feedback to perform additional research to refine our findings and formulate concrete recommendations."
        },
        {
            title: "Delivery",
            description: "Consultants will send you their deliverables such as presentations, market data, and written reports."
        }
    ]

    return (
        <Layout title='Consults'>
            <div className={styles.intro}>
                <div className={styles.introLeft}>
                    <h2 className="purple-font">Our Services</h2>
                    <h3>
                        The Management Consulting Group provides pro-bono consulting services to clients to help across four service categories.
                    </h3>
                </div>
                <CenteredGrid Component={ResearchIntroIcon} props={serviceCategories} gridKey='consults' />
            </div>
            <div className={styles.intro}>
                <div className={styles.introLeft}>
                <h2 className="purple-font">Our Project Workflow</h2>
                </div>
                <NumberedLayout Component={ResearchIntroIcon} props={steps} />
                </div>
        </Layout>
    );
}

export default memo(Consults);
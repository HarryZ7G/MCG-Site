import { memo } from "react";
import CenteredGrid from "../../components/CenteredGrid/CenteredGrid";
import Layout from "../../components/Layout/Layout";
import NumberedLayout from "../../components/NumberedLayout/NumberedLayout";
import ResearchIntroIcon from "../../components/ResearchPreview/ResearchIntroIcon/ResearchIntroIcon";
import styles from './Consults.module.css'

// Clients
import CitedMedia from '../../media/Consults/cited-media.jpg'
import ConsultCard from "../../components/ConsultCard/ConsultCard";

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

    const experience = [
        {
            company: {
                name: 'Cited Media',
                image: CitedMedia
            },
            testimonial: {
                name: 'Gordon Katic',
                image: CitedMedia,
                role: 'CEO, Cited Media',
                quote: 'The market research here is impressive and helpful, and I found some of the client lists really useful. I was impressed by your team and its ability to understand a hyper-specialized, niche, and emerging industry.'
            },
            description: 'During Winter 2023, a Senior Partner at MCG led a group of 9 to present the Cited Media with market scale and in-depth industry research, data-driven strategies and customized marketing plans within budget. The client was able to expand their reach among targeted audiences and improve cost efficiency.'
        },
        {
            company: {
                name: 'Meds for Less',
                image: CitedMedia,
            },
            testimonial: {
                name: 'Aliya Ali',
                role: 'CEO, Meds for Less',
                image: CitedMedia,
                quote: "A consultation by the MCG is a great way to get things rolling. MCG understood our challenges and provided strategies to overcome them, conducted intense market research, provided customer acquisition strategies, an advertising budget, and an in-depth financial model."
            },
            description: 'A MCG group of 7 provided both qualitative and quantitative analysis of the market and strategic recommendations on market entry. We informed the client of potential regulation and business risks to enter the new market and justified our conclusion with a five-year financial forecast.'
        },
        {
            company: {
                name: 'Everyteam',
                image: CitedMedia,
            },
            testimonial: {
                name: 'Evan Davidson',
                role: 'CEO, Everyteam',
                image: CitedMedia,
                quote: "Your team was involved, responsive, and provided valuable insights and recommendations that will help us to improve and succeed. I believe that the consultation has had a positive impact on the future of Everyteam."
            },
            description: 'Everyteam is a team communication platform for workspace connectivity. During our Fall 2022 consult, MCG helped the company approach long-lasting and sustainable change for clients to maximize their operational efficiency. Our team provided research-backed recommendations for understaning market capacity, trends, growth, and changes in consumer preferences.'
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
            <div className={styles.clients}>
            {experience.map(exp => <ConsultCard {...exp} />)}
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
// Simple component to render a Frequently Asked Question on Hiring/Careers page
export default function FAQuestion({ question, answer }) {
    return (
        <div style={{margin: '10px 0'}}>
            <b>Q: {question}</b>
            <br/>
            <b>A:</b> {answer}
        </div>
    )
}
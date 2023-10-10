export const Feedback = ({ onFeedbackClick }) => {
    return (
        <>
        <h2>Please lave feedback</h2>
        <div>
            <button type="button" onClick={() => onFeedbackClick('good')}>Good</button>
            <button type="button" onClick={() => onFeedbackClick('neutral')}>Neutral</button>
            <button type="button" onClick={() => onFeedbackClick('bad')}>Bad</button>
        </div>
        </>
    )
}
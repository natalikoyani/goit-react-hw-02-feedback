export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return(
        <>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positive feedback: {positivePercentage}%</span>
        </>
    )
}
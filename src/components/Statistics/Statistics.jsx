export const Statistics = ({ good, neutral, bad }) => {
    return(
        <>
            <h2>Statistics</h2>
            <div>
                <span>Good: {good}</span>
                <span>Neutral: {neutral}</span>
                <span>Bad: {bad}</span>
            </div>
        </>
    )
}
import { StatisticsWrapper } from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return(
        <StatisticsWrapper>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {total}</span>
            <span>Positive feedback: {positivePercentage}%</span>
        </StatisticsWrapper>
    )
}
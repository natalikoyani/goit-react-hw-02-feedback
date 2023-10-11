import { Button, ButtonWrapper } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <ButtonWrapper>
            <Button type="button" onClick={() => onLeaveFeedback('good')}>Good</Button>
            <Button type="button" onClick={() => onLeaveFeedback('neutral')}>Neutral</Button>
            <Button type="button" onClick={() => onLeaveFeedback('bad')}>Bad</Button>
        </ButtonWrapper>
    )
}
import { Button, ButtonWrapper } from "./FeedbackOptions.styled";
import { nanoid } from "nanoid";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <ButtonWrapper>
            {options.map(option => (
                <Button key={nanoid()} type="button" onClick={() => onLeaveFeedback(`${option}`)}>{option}</Button>
            ))}
        </ButtonWrapper>
    )
}
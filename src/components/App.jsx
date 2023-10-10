import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  // updateGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1
  //   }));
  // }

  // updateNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1
  //   }));
  // }

  // updateBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1
  //   }));
  // }

  updateFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1
    }));
  }

  render() {
    const { good, neutral, bad } = this.state;

    return(
    <>
      <Feedback onFeedbackClick={(feedbackType) => this.updateFeedback(feedbackType)} />
      <Statistics
          good={good}
          neutral={neutral}
          bad={bad}/>
    </>
    )
  }
};
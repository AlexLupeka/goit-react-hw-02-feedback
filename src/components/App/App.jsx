import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import { Container } from '../App/App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / total;
    return Math.round(percentage);
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const objKeys = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objKeys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              title="Statistic"
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        )}
      </Container>
    );
  }
}

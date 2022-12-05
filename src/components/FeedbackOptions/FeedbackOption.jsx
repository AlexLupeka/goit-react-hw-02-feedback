import PropTypes from 'prop-types';
import {
  ControlList,
  ControlItem,
  ControlButton,
} from './FeedbackOption.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ControlList>
      {options.map(feedback => (
        <ControlItem key={feedback}>
          <ControlButton onClick={() => onLeaveFeedback(feedback)}>
            {feedback}
          </ControlButton>
        </ControlItem>
      ))}
    </ControlList>
  );
};

export default FeedbackOptions;

FeedbackOptions.prototype = {
  options: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.number.isRequired,
};

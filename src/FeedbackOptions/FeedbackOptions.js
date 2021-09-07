import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  // const optionsArr = Object.keys(options);

  return (
    <ul className={s.buttonList}>
      {options.map(option => (
        <li key={option} className={s.listItem}>
          <button type="button" onClick={onLeaveFeedback} className={s.button}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

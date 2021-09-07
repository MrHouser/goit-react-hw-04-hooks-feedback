import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul className={s.list}>
        <li>
          <p>
            <span className={s.good}>Good:</span> {good}
          </p>
        </li>
        <li>
          <p>
            <span className={s.neutral}>Neutral:</span> {neutral}
          </p>
        </li>
        <li>
          <p>
            <span className={s.bad}>Bad:</span> {bad}
          </p>
        </li>
      </ul>
      <p>Total: {total}</p>
      <p>
        Positive feedback:{' '}
        <span
          className={`${positivePercentage >= 75 && s.good} ${
            (positivePercentage >= 50) & (positivePercentage < 75) && s.neutral
          } ${positivePercentage < 50 && s.bad}`}
        >
          {positivePercentage}%
        </span>
      </p>
    </>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

import PropTypes from "prop-types";
import styles from "./Description.module.css";

const Description = ({ totalFeedback }) => {
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      {totalFeedback === 0 && (
        <p>No feedback received yet. Be the first to leave feedback!</p>
      )}
    </div>
  );
};

Description.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
};

export default Description;

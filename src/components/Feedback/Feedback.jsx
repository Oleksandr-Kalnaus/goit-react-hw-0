import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({ transactions }) => {
  return (
    <ul>
      <li>Good:</li>
      <li>Bad:</li>
      <li>Neutral:</li>
      <li>Total:</li>
      <li>Positive:</li>
    </ul>
  );
};

export default Feedback;

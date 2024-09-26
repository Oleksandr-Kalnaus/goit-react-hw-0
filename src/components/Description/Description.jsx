import PropTypes from "prop-types";
import styles from "./Description.module.css";

const Description = ({ friends }) => {
  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;

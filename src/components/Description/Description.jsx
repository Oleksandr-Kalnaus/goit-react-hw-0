import styles from "./Description.module.css";

const Description = ({ totalFeedback }) => {
  return (
    <div className={styles.headingBox}>
      <h1 className={styles.headingName}>Sip Happens Café</h1>
      <p className={styles.headingDescription}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      {totalFeedback > 0 ? null : (
        <p className={styles.noFeedbackMessage}>
          No feedback received yet. Be the first to leave feedback!
        </p>
      )}
    </div>
  );
};

export default Description;

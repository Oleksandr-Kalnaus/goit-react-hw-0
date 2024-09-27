import styles from "./Options.module.css";
import { BsEmojiGrin, BsEmojiFrown, BsEmojiNeutral } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";
import PropTypes from "prop-types";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback("good")}>
        Good <BsEmojiGrin />
      </button>
      <button onClick={() => onLeaveFeedback("neutral")}>
        Neutral <BsEmojiNeutral />
      </button>
      <button onClick={() => onLeaveFeedback("bad")}>
        Bad <BsEmojiFrown />
      </button>
      {totalFeedback > 0 && (
        <button onClick={onReset}>
          Reset <GrPowerReset />
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;

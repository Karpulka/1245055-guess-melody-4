import React from "react";
import PropTypes from "prop-types";

const QuestionArtistAnswer = (props) => {
  const {answer: {src, answer}} = props;

  return <div className="artist">
    <input className="artist__input visually-hidden" type="radio" name="answer" value={answer} id="answer"/>
    <label className="artist__name" htmlFor="answer">
      <img className="artist__picture" src={src} alt={answer}/>
      {answer}
    </label>
  </div>;
};

QuestionArtistAnswer.propTypes = {
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }).isRequired
};

export default QuestionArtistAnswer;

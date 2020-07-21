import React from "react";
import PropTypes from "prop-types";

const QuestionArtistAnswer = (props) => {
  const {answer: {src, answer}, onChangeAnswer, question, id} = props;

  return <div className="artist">
    <input className="artist__input visually-hidden" type="radio" name="answer" value={answer} id={`answer-${id}`}
      onChange={(evt) => {
        evt.preventDefault();
        onChangeAnswer(question, {src, answer});
      }}/>
    <label className="artist__name" htmlFor={`answer-${id}`}>
      <img className="artist__picture" src={src} alt={answer}/>
      {answer}
    </label>
  </div>;
};

QuestionArtistAnswer.propTypes = {
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }).isRequired,
  onChangeAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.string,
    song: PropTypes.shape({
      answer: PropTypes.string.isRequired,
      src: PropTypes.string
    }),
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired
        })
    ).isRequired
  }).isRequired,
  id: PropTypes.number.isRequired
};

export default QuestionArtistAnswer;

import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";

const QuestionGenre = (props) => {
  const {question, question: {answers, genre}, onAnswerSubmit, renderPlayer, answers: userAnswers, setAnswer} = props;

  return <section className="game game--genre">
    <Header />

    <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt) => {
        evt.preventDefault();
        onAnswerSubmit(question, userAnswers);
      }}>
        {answers.map((answer, id) =>
          <div className="track" key={answer.answer + id}>
            {renderPlayer(answer.src, id)}
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value={answer.answer}
                id={`answer-${id}`}
                checked={userAnswers[id]}
                onChange={(evt) => {
                  const value = evt.target.checked;
                  setAnswer(id, value);
                }}
              />
              <label className="game__check" htmlFor={`answer-${id}`}>Отметить</label>
            </div>
          </div>
        )}
        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>;
};

QuestionGenre.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired
        })
    ).isRequired
  }).isRequired,
  onAnswerSubmit: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  answers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  setAnswer: PropTypes.func.isRequired
};

export default QuestionGenre;

import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";

export default class QuestionGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false]
    };
  }

  render() {
    const {question: {answers, genre}, onAnswerSubmit, renderPlayer} = this.props;
    const {answers: userAnswers} = this.state;

    return <section className="game game--genre">
      <Header />

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault();
          onAnswerSubmit(this.props.question, this.state.answers);
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
                    this.setState({
                      answers: [...userAnswers.slice(0, id), value, ...userAnswers.slice(id + 1)]
                    });
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
  }
}

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
  renderPlayer: PropTypes.func.isRequired
};

import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import QuestionArtistAnswer from "../question-artist-answer/question-artist-answer.jsx";

const QuestionArtist = (props) => {
    const {question: {song, answers}, renderPlayer} = props;

    return <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {renderPlayer(song.src, 0)}
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer) => <QuestionArtistAnswer
            key={answer.answer}
            answer={answer}
            onChangeAnswer={this.props.onChangeAnswer}
            question={this.props.question}
          />)}
        </form>
      </section>
    </section>;
};

QuestionArtist.propTypes = {
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
  onChangeAnswer: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export default QuestionArtist;

import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import QuestionArtistAnswer from "../question-artist-answer/question-artist-answer.jsx";
import AudioPlayer from "../audio-player/audio-player.jsx";

class QuestionArtist extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true
    };
  }

  render() {
    const {song, answers} = this.props.question;
    const {isPlaying} = this.state;

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
            <AudioPlayer
              src={song.src}
              isPlaying={isPlaying}
              onPlayButtonClick={() => {
                this.setState({
                  isPlaying: !isPlaying
                });
              }}
            />
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
  }
}

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
  onChangeAnswer: PropTypes.func.isRequired
};

export default QuestionArtist;

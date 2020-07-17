import React from "react";
import PropTypes from "prop-types";
import QuestionArtistAnswer from "../question-artist-answer/question-artist-answer.jsx";
import Header from "../header/header.jsx";

const QuestionArtist = (props) => {
  const {question: {song, answers}, renderPlayer} = props;

  return <section className="game game--artist">
    <Header/>

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
          onChangeAnswer={props.onChangeAnswer}
          question={props.question}
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

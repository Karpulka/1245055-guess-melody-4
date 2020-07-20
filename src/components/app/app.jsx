import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import {GameType} from "../../constants";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
import withGenreQuestionAnswer from "../../hocs/with-genre-question-answer/with-genre-question-answer";

const ArtistQuestionScreenWrapped = withAudioPlayer(QuestionArtist);
const QuestionGenreComponent = withGenreQuestionAnswer(QuestionGenre);
const GenreQuestionScreenWrapped = withAudioPlayer(QuestionGenreComponent);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  render() {
    const {questions} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderGameScreen()}
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreenWrapped question={questions[1]} onChangeAnswer={() => {}}/>
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreenWrapped question={questions[0]} onAnswerSubmit={() => {}}/>
        </Route>
      </Switch>
    </BrowserRouter>;
  }

  _renderGameScreen() {
    const {maxErrorCount: errorsCount, questions, step, handleWelcomeButtonClick, handleChangeAnswer} = this.props;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={handleWelcomeButtonClick}/>;
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <ArtistQuestionScreenWrapped question={question} onChangeAnswer={handleChangeAnswer}/>
          );
        case GameType.GENRE:
          return (
            <GenreQuestionScreenWrapped
              question={question}
              onAnswerSubmit={handleChangeAnswer}
            />
          );
      }
    }

    return null;
  }
}

App.propTypes = {
  maxErrorCount: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string,
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
  })),
  handleWelcomeButtonClick: PropTypes.func.isRequired,
  handleChangeAnswer: PropTypes.func.isRequired
};

const mapStateToPops = (state) => ({
  step: state.step,
  maxErrorCount: state.maxErrorCount,
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  handleWelcomeButtonClick() {
    dispatch(ActionCreator.nextStep());
  },

  handleChangeAnswer(question, answer) {
    dispatch(ActionCreator.addError(question, answer));
    dispatch(ActionCreator.nextStep());
  }
});

export {App};
export default connect(mapStateToPops, mapDispatchToProps)(App);

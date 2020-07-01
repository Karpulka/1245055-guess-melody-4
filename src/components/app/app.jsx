import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";
import {GameType} from "../../constants";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.jsx";

const handleChangeAnswer = () => {};
const handleAnswerSubmit = () => {};
const GenreQuestionScreenWrapped = withAudioPlayer(QuestionGenre);
const ArtistQuestionScreenWrapped = withAudioPlayer(QuestionArtist);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };
  }

  render() {
    const {settings} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderGameScreen()}
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreenWrapped question={settings.questions[1]} onChangeAnswer={handleChangeAnswer}/>
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreenWrapped question={settings.questions[0]} onAnswerSubmit={handleAnswerSubmit}/>
        </Route>
      </Switch>
    </BrowserRouter>;
  }

  _renderGameScreen() {
    const {errorsCount, questions} = this.props.settings;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={() => {
        this.setState({step: 0});
      }}/>;
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <ArtistQuestionScreenWrapped question={question} onChangeAnswer={() => {
              this.setState((prevState) => ({
                step: prevState.step + 1
              }));
            }}/>
          );
        case GameType.GENRE:
          return (
            <GenreQuestionScreenWrapped
              question={question}
              onAnswerSubmit={() => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
            />
          );
      }
    }

    return null;
  }
}

App.propTypes = {
  settings: PropTypes.shape({
    errorsCount: PropTypes.number,
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
    }))
  })
};

export default App;

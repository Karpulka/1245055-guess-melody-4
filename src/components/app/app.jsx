import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import QuestionArtist from "../question-artist/question-artist.jsx";
import QuestionGenre from "../question-genre/question-genre.jsx";

const onWelcomeButtonClick = () => {};

const App = (props) => {
  const {settings} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <WelcomeScreen errorsCount={settings.errorsCount} onWelcomeButtonClick={onWelcomeButtonClick}/>
      </Route>
      <Route exact path="/dev-artist">
        <QuestionArtist />
      </Route>
      <Route exact path="/dev-genre">
        <QuestionGenre />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  settings: PropTypes.shape({
    errorsCount: PropTypes.number
  })
};

export default App;

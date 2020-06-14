import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const onWelcomeButtonClick = () => {};

const App = (props) => {
  const {settings} = props;

  return <WelcomeScreen errorsCount={settings.errorsCount} onWelcomeButtonClick={onWelcomeButtonClick}/>;
};

App.propTypes = {
  settings: PropTypes.shape({
    errorsCount: PropTypes.number
  })
};

export default App;

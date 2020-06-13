import React from "react";
import {WelcomeScreen} from "../welcom-screen/welcom-screen.jsx";
import PropTypes from "prop-types";

export const App = (props) => {
  const {settings} = props;

  return <WelcomeScreen errorsCount = {settings.errorsCount}/>;
};

App.propTypes = {
  settings: PropTypes.shape({
    errorsCount: PropTypes.number
  })
};

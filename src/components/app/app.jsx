import React from "react";
import {WelcomeScreen} from "../welcom-screen/welcom-screen.jsx";

export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {settings} = props;
  // eslint-disable-next-line react/prop-types
  return <WelcomeScreen errorsCount = {settings.errorsCount}/>;
};

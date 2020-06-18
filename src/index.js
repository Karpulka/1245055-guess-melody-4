import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions";

const ERRORS_COUNT = 5;

const init = () => {
  const settings = {
    errorsCount: ERRORS_COUNT,
    questions
  };

  ReactDOM.render(
      <App settings={settings}/>,
      document.querySelector(`#root`)
  );
};

init();

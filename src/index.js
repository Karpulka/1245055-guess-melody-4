import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const ERRORS_COUNT = 5;

const init = () => {
  const settings = {
    errorsCount: ERRORS_COUNT
  };

  ReactDOM.render(
      <App settings={settings}/>,
      document.querySelector(`#root`)
  );
};

init();

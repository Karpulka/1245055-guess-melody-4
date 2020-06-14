import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const settings = {
  errorsCount: 7
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App settings={settings}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

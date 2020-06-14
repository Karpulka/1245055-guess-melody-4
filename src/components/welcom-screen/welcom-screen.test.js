import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcom-screen";

const errorsCount = 4;

it(`Render WelcomScreen`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount = {errorsCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

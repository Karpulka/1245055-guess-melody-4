import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

const errorsCount = 4;
const onWelcomeButtonClick = () => {};

it(`Render WelcomeScreen`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={errorsCount}
      onWelcomeButtonClick={onWelcomeButtonClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

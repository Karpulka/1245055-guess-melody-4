import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

const errorsCount = 6;

Enzyme.configure({
  adapter: new Adapter()
});

it(`Welcome button press`, () => {
  const onWelcomeButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={errorsCount}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.simulate(`click`);

  expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
});

import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Success} from "./success";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Click by Reload Game`, () => {
  const reloadGame = jest.fn();

  const successComponent = shallow(<Success
    reloadGame={reloadGame}
    errorsCount={3}
    questionCount={19}
  />);

  const reloadButton = successComponent.find(`button`);
  reloadButton.simulate(`click`);
  expect(reloadGame).toHaveBeenCalledTimes(1);
});

import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Fail} from "./fail";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Fail: Click by Reload Game`, () => {
  const reloadGame = jest.fn();

  const failComponent = shallow(<Fail
    reloadGame={reloadGame}
  />);

  const reloadButton = failComponent.find(`button`);
  reloadButton.simulate(`click`);
  expect(reloadGame).toHaveBeenCalledTimes(1);
});

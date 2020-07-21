import React from "react";
import renderer from "react-test-renderer";
import {Fail} from "./fail";

it(`Render Fail`, () => {
  const tree = renderer
    .create(<Fail reloadGame={() => {}} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Fail from "./fail";

it(`Render Fail`, () => {
  const tree = renderer
    .create(<Fail />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

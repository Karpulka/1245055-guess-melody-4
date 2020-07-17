import React from "react";
import renderer from "react-test-renderer";
import {Mistakes} from "./mistakes";

it(`Render Mistakes`, () => {
  const tree = renderer
    .create(<Mistakes errorsCount={3} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

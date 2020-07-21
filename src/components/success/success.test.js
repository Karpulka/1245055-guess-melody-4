import React from "react";
import renderer from "react-test-renderer";
import {Success} from "./success";

it(`Render Success`, () => {
  const tree = renderer
    .create(<Success questionCount={13} errorsCount={2} reloadGame={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

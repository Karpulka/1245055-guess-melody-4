import React from "react";
import renderer from "react-test-renderer";
import QuestionGenre from "./question-genre";

it(`Render QuestionGenre`, () => {
  const tree = renderer
    .create(<QuestionGenre/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

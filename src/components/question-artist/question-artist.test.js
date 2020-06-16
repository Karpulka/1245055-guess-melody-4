import React from "react";
import renderer from "react-test-renderer";
import QuestionArtist from "./question-artist";

it(`Render QuestionArtist`, () => {
  const tree = renderer
    .create(<QuestionArtist/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

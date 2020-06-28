import React from "react";
import renderer from "react-test-renderer";
import QuestionGenre from "./question-genre";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `111`,
    answer: `rock`,
  }, {
    src: `222`,
    answer: `blues`,
  }, {
    src: `333`,
    answer: `jazz`,
  }, {
    src: `444`,
    answer: `rock`,
  }]
};

const handleAnswerSubmit = () => {};

it(`Render QuestionGenre`, () => {
  const tree = renderer
    .create(<QuestionGenre question={question} onAnswerSubmit={handleAnswerSubmit}/>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

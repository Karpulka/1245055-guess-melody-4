import React from "react";
import renderer from "react-test-renderer";
import QuestionArtist from "./question-artist";

const question = {
  type: `artist`,
  song: {
    answer: ``,
    src: ``
  },
  answers: [
    {
      answer: `one`,
      src: `pic-one`,
    },
    {
      answer: `two`,
      src: `pic-two`,
    },
    {
      answer: `three`,
      src: `pic-three`,
    },
  ]
};

const handleChangeAnswer = () => {};

it(`Render QuestionArtist`, () => {
  const tree = renderer
    .create(<QuestionArtist question={question} onChangeAnswer={handleChangeAnswer}/>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

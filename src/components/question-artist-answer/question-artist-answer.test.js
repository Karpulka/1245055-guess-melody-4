import React from "react";
import renderer from "react-test-renderer";
import QuestionArtistAnswer from "./question-artist-answer.jsx";

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

const answer = {
  src: `pic-one`,
  answer: `one`
};

const handleChangeAnswer = () => {};

it(`Render QuestionArtistAnswer component`, () => {
  const tree = renderer
    .create(<QuestionArtistAnswer
      answer={answer}
      onChangeAnswer={handleChangeAnswer}
      question={question}
      id={0}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

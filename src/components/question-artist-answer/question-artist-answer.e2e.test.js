import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionArtistAnswer from "./question-artist-answer.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

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

const changeAnswerEvent = {
  preventDefault() {}
};

it(`Test user answer callback`, () => {
  const handleChangeAnswer = jest.fn();
  const userAnswer = {
    answer: `one`,
    src: `pic-one`,
  };

  const questionArtistAnswer = shallow(
      <QuestionArtistAnswer
        answer={userAnswer}
        onChangeAnswer={handleChangeAnswer}
        question={question}
      />
  );

  const answerInput = questionArtistAnswer.find(`input`);
  answerInput.simulate(`change`, changeAnswerEvent);

  expect(handleChangeAnswer).toHaveBeenCalledTimes(1);

  expect(handleChangeAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(handleChangeAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});

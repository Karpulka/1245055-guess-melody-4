import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionGenre from "./question-genre.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

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

const formSubmitEvent = {
  preventDefault() {}
};

it(`Click Send UserAnswer`, () => {
  const handelAnswerSubmit = jest.fn((...args) => [...args]);
  const userAnswers = [false, false, true, false];

  const questionGenre = shallow(
      <QuestionGenre
        question={question}
        onAnswerSubmit={handelAnswerSubmit}
      />
  );

  const form = questionGenre.find(`.game__tracks`);
  const inputThree = questionGenre.find(`input`).at(2);

  inputThree.simulate(`change`, {target: {checked: true}});
  form.simulate(`submit`, formSubmitEvent);

  expect(handelAnswerSubmit).toHaveBeenCalledTimes(1);

  expect(handelAnswerSubmit.mock.calls[0][0]).toMatchObject(question);
  expect(handelAnswerSubmit.mock.calls[0][1]).toMatchObject(userAnswers);

  expect(
      questionGenre.find(`input`).map((it) => it.prop(`checked`))
  ).toEqual(userAnswers);
});

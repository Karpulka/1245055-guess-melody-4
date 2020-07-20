import React from "react";
import renderer from "react-test-renderer";
import QuestionGenre from "./question-genre";
import {Provider} from "react-redux";
import configStore from "redux-mock-store";

const mockStore = configStore([]);

const answers = [false, true, true, false];

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
  const store = mockStore({
    errorCount: 0
  });

  const tree = renderer
    .create(<Provider store={store}>
      <QuestionGenre
        question={question}
        onAnswerSubmit={handleAnswerSubmit}
        renderPlayer={() => {}}
        answers={answers}
        setAnswer={() => {}}
      />
    </Provider>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

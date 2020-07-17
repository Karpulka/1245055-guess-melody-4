import React from "react";
import renderer from "react-test-renderer";
import QuestionArtist from "./question-artist";
import {Provider} from "react-redux";
import configStore from "redux-mock-store";

const mockStore = configStore([]);

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
  const store = mockStore({
    errorCount: 0
  });

  const tree = renderer
    .create(<Provider store={store}>
      <QuestionArtist question={question} onChangeAnswer={handleChangeAnswer} renderPlayer={() => {}}/>
    </Provider>, {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});

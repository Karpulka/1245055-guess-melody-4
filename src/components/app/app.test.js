import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import configueStore from "redux-mock-store";

const mockStore = configueStore([]);

const questions = [{
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
  }],
},
{
  type: `artist`,
  song: {
    answer: `Jim Beam`,
    src: `111`,
  },
  answers: [{
    src: `222`,
    answer: `John Snow`,
  }, {
    src: `333`,
    answer: `Jack Daniels`,
  }, {
    src: `111`,
    answer: `Jim Beam`,
  }]
}];

it(`Render App`, () => {
  const store = mockStore({
    errorCount: 0
  });
  const tree = renderer
    .create(<Provider store={store}>
      <App maxErrorCount={3} step={-1} handleWelcomeButtonClick={() => {}} handleChangeAnswer={() => {}} questions={questions}/>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

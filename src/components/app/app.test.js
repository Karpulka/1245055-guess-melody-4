import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const settings = {
  errorsCount: 7,
  questions: [{
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
    }],
  }]
};

it(`Render App`, () => {
  const tree = renderer
    .create(<App settings={settings}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

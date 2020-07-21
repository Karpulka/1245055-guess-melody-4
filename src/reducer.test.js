import {reducer, ActionCreator, ActionType} from "./reducer.js";

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      answer: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      answer: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      answer: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      answer: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      answer: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      src: `https://api.adorable.io/avatars/128/A`,
      answer: `John Snow`,
    }, {
      src: `https://api.adorable.io/avatars/128/AB`,
      answer: `Jack Daniels`,
    }, {
      src: `https://api.adorable.io/avatars/128/AC`,
      answer: `Jim Beam`,
    }],
  },
];

describe(`Reduser sstate tests`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      step: -1,
      errorCount: 0,
      maxErrorCount: 3,
      questions,
    });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer({
      step: -1,
      errorCount: 0,
      questions,
    }, {
      type: ActionType.NEXT_QUESTION,
      payload: 1,
    })).toEqual({
      step: 0,
      errorCount: 0,
      questions,
    });

    expect(reducer({
      step: -1,
      errorCount: 0,
      questions,
    }, {
      type: ActionType.NEXT_QUESTION,
      payload: 0,
    })).toEqual({
      step: -1,
      errorCount: 0,
      questions,
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      step: -1,
      errorCount: 0,
    }, {
      type: ActionType.ADD_ERROR,
      payload: 1,
    })).toEqual({
      step: -1,
      errorCount: 1,
    });

    expect(reducer({
      step: -1,
      errorCount: 0,
    }, {
      type: ActionType.ADD_ERROR,
      payload: 0,
    })).toEqual({
      step: -1,
      errorCount: 0,
    });
  });

  it(`Reducer should return default`, () => {
    expect(reducer({
      step: 5,
      errorCount: 1,
    }, {
      type: ActionType.RELOAD_GAME,
      payload: 0,
    })).toEqual({
      step: 0,
      errorCount: 0,
      maxErrorCount: 3,
      questions,
    });

    expect(reducer({
      step: 0,
      errorCount: 0,
    }, {
      type: ActionType.RELOAD_GAME,
      payload: 0,
    })).toEqual({
      step: 0,
      errorCount: 0,
      maxErrorCount: 3,
      questions,
    });

    expect(reducer({
      step: -1,
      errorCount: 0,
    }, {
      type: ActionType.RELOAD_GAME,
      payload: 0,
    })).toEqual({
      step: 0,
      errorCount: 0,
      maxErrorCount: 3,
      questions,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.nextStep()).toEqual({
      type: ActionType.NEXT_QUESTION,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    expect(ActionCreator.addError({
      type: `artist`,
      song: {
        answer: `correct`,
        src: ``,
      },
      answers: [
        {
          answer: `correct`,
          src: ``,
        }, {
          answer: `incorrect`,
          src: ``,
        }, {
          answer: `incorrect-2`,
          src: ``,
        },
      ]
    }, {
      answer: `correct`,
      src: ``,
    })).toEqual({
      type: ActionType.ADD_ERROR,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(ActionCreator.addError({
      type: `artist`,
      song: {
        answer: `correct`,
        src: ``,
      },
      answers: [
        {
          answer: `correct`,
          src: ``,
        }, {
          answer: `incorrect`,
          src: ``,
        }, {
          answer: `incorrect-2`,
          src: ``,
        },
      ]
    }, {
      answer: `incorrect`,
      src: ``,
    })).toEqual({
      type: ActionType.ADD_ERROR,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
    expect(ActionCreator.addError({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          answer: `rock`,
          src: ``,
        }, {
          answer: `jazz`,
          src: ``,
        }, {
          answer: `blues`,
          src: ``,
        }, {
          answer: `blues`,
          src: ``,
        },
      ]
    }, [false, true, false, false])).toEqual({
      type: ActionType.ADD_ERROR,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    expect(ActionCreator.addError({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          answer: `blues`,
          src: ``,
        }, {
          answer: `blues`,
          src: ``,
        }, {
          answer: `blues`,
          src: ``,
        }, {
          answer: `blues`,
          src: ``,
        },
      ]
    }, [true, true, true, true])).toEqual({
      type: ActionType.ADD_ERROR,
      payload: 1,
    });
  });

  it(`Action creator for reset game returns action with null payload`, () => {
    expect(ActionCreator.reloadGame())
      .toEqual({
        type: ActionType.RELOAD_GAME,
        payload: 0,
      });
  });
});

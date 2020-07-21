import {extend} from "./utils";
import {GameType} from "./constants";
import questions from "./mocks/questions";

export const defaultState = {
  errorCount: 0,
  step: -1,
  maxErrorCount: 3,
  questions
};

export const ActionType = {
  ADD_ERROR: `ADD_ERROR`,
  NEXT_QUESTION: `NEXT_QUESTION`,
  RELOAD_GAME: `RELOAD_GAME`
};

const isArtistAnswerCorrect = (question, userAnswer) => {
  return question.song.answer === userAnswer.answer;
};

const isGenreAnswerCorrect = (question, userAnswer) => {
  return userAnswer.every((it, i) => {
    return it === (question.genre === question.answers[i].answer);
  });
};

export const ActionCreator = {
  nextStep: () => ({
    type: ActionType.NEXT_QUESTION,
    payload: 1
  }),

  addError: (question, userAnswer) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case GameType.ARTIST:
        answerIsCorrect = isArtistAnswerCorrect(question, userAnswer);
        break;
      case GameType.GENRE:
        answerIsCorrect = isGenreAnswerCorrect(question, userAnswer);
        break;
    }

    return {
      type: ActionType.ADD_ERROR,
      payload: answerIsCorrect ? 0 : 1
    };
  },

  reloadGame: () => ({
    type: ActionType.RELOAD_GAME,
    payload: 0
  })
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.ADD_ERROR:
      const errorsCount = state.errorCount + action.payload;

      if (errorsCount >= state.maxErrorCount) {
        return extend({}, defaultState);
      }

      return extend(state, {
        errorCount: state.errorCount + action.payload
      });

    case ActionType.NEXT_QUESTION:
      const nextStep = state.step + action.payload;

      if (nextStep >= state.questions.lengh) {
        return extend({}, defaultState);
      }

      return extend(state, {
        step: nextStep
      });

    case ActionType.RELOAD_GAME:
      return extend(defaultState, {step: action.payload});

    default:
      return state;
  }
};

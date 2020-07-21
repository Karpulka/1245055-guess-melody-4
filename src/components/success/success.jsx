import React from "react";
import PropTypes from "prop-types";

const Success = (props) => {
  const {questionCount, errorsCount} = props;
  return <section className="result">
    <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
    <h2 className="result__title">Вы настоящий меломан!</h2>
    <p className="result__total">Вы ответили правильно на {questionCount} вопросов и совершили {errorsCount} ошибки</p>
    <button className="replay" type="button">Сыграть ещё раз</button>
  </section>;
};

Success.defaultProps = {
  questionCount: 0,
  errorsCount: 0
};

Success.propTypes = {
  questionCount: PropTypes.number,
  errorsCount: PropTypes.number
};

export default Success;

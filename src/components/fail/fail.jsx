import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import {connect} from "react-redux";

const Fail = (props) => {
  const {reloadGame} = props;
  return <section className="result">
    <div className="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
    <h2 className="result__title">Какая жалость!</h2>
    <p className="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
    <button className="replay" type="button" onClick={reloadGame}>Попробовать ещё раз</button>
  </section>;
};

Fail.propTypes = {
  reloadGame: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  reloadGame() {
    dispatch(ActionCreator.reloadGame());
  }
});

export {Fail};
export default connect(null, mapDispatchToProps)(Fail);

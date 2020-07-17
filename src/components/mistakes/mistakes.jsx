import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const Mistakes = (props) => {
  const {errorsCount} = props;

  const mistakes = new Array(errorsCount).fill(``);

  return <div className="game__mistakes">
    {mistakes.map((error, i) => <div key={`mistakes-${i}`} className="wrong"></div>)}
  </div>;
};

Mistakes.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

const mapStateToPorps = (state) => ({
  errorsCount: state.errorCount
});

export {Mistakes};
export default connect(mapStateToPorps)(Mistakes);

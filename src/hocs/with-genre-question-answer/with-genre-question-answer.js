import React, {PureComponent} from "react";

const withGenreQuestionAnswer = (Component) => {
  class WithGenreQuestionAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this.setAnswer = this.setAnswer.bind(this);

      this.state = {
        answers: [false, false, false, false]
      };
    }

    render() {
      const {answers} = this.state;
      return <Component {...this.props} answers={answers} setAnswer={this.setAnswer}/>;
    }

    setAnswer(id, value) {
      const {answers: userAnswers} = this.state;
      this.setState({
        answers: [...userAnswers.slice(0, id), value, ...userAnswers.slice(id + 1)]
      });
    }
  }

  WithGenreQuestionAnswer.propTypes = {};

  return WithGenreQuestionAnswer;
};

export default withGenreQuestionAnswer;

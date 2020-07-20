import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const withAudio = (Component) => {
  class WithAudio extends PureComponent {
    constructor(props) {
      super(props);

      this.changeIsPlaying = this.changeIsPlaying.bind(this);
      this._audioRef = createRef();

      this.state = {
        progress: 0,
        isLoading: true,
        isPlaying: props.isPlaying
      };
    }

    componentDidMount() {
      const audio = this._audioRef.current;
      audio.src = this.props.src;

      audio.oncanplaythrough = () => {
        this.setState({
          isLoading: false
        });
      };

      audio.onplay = () => {
        this.setState({
          isPlaying: true
        });
      };

      audio.onpause = () => {
        this.setState({
          isPlaying: false
        });
      };

      audio.ontimeupdate = () => {
        this.setState({
          progress: audio.currentTime
        });
      };
    }

    componentWillUnmount() {
      const audio = this._audioRef.current;

      audio.oncanplaythrough = null;
      audio.onplay = null;
      audio.onpause = null;
      audio.ontimeupdate = null;
      audio.src = ``;
    }

    componentDidUpdate() {
      const audio = this._audioRef.current;

      if (this.props.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    render() {
      const {isLoading} = this.state;

      return <Component
        {...this.props}
        changeIsPlaying = {this.changeIsPlaying}
        isLoading = {isLoading}
      >
        <audio ref={this._audioRef}></audio>
      </Component>;
    }

    changeIsPlaying() {
      this.setState({isPlaying: !this.state.isPlaying});
    }
  }

  WithAudio.propTypes = {
    src: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired
  };

  return WithAudio;
};

export default withAudio;

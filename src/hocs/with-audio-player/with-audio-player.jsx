import React, {PureComponent} from "react";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";

const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: 0
      };
    }

    render() {
      const {activePlayer} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          return <AudioPlayer
            src={src}
            isPlaying={id === activePlayer}
            onPlayButtonClick={() => {
              this.setState({
                activePlayer: activePlayer === id ? -1 : id,
              });
            }}
          />;
        }}
      />;
    }
  }

  WithAudioPlayer.propTypes = {};

  return WithAudioPlayer;
};

export default withAudioPlayer;

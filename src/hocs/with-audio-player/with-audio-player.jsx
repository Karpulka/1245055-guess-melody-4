import React, {PureComponent} from "react";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";
import withAudio from "../with-audio/with-audio";

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
      const AudioPlayerComponent = withAudio(AudioPlayer);

      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          return <AudioPlayerComponent
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
